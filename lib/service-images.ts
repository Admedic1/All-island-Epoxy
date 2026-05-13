import type { ServiceSlug } from "@/lib/services-data";

/**
 * Picsum seeds selected to produce industrial/architectural photos
 * that match the dark, textured aesthetic of the site.
 * Update LOCAL_COVERS to replace with real photos as they're shot.
 */
const PICSUM_SEEDS: Partial<Record<ServiceSlug, string>> = {
  "garage-floor-coating": "garage-coat",
  "metallic-epoxy": "metallic-sheen",
  "flake-epoxy": "chip-floor",
  "grind-and-seal": "concrete-grind",
  "commercial-epoxy": "warehouse-bay",
  "polyaspartic-coatings": "poly-shine",
};

function placeholderSrc(slug: string) {
  const seed = PICSUM_SEEDS[slug as ServiceSlug] ?? slug.replace(/-/g, "");
  return `https://picsum.photos/seed/${seed}/900/560`;
}

export type ServicePhoto = { src: string; alt: string };

/** Local files live in `/public`. Add entries here as you upload real photos. */
const LOCAL_COVERS: Partial<
  Record<ServiceSlug, ServicePhoto & { gallery?: ServicePhoto[] }>
> = {
  "commercial-epoxy": {
    src: "/images/commercial-dealership.png",
    alt: "Auto dealership service bay with full-broadcast flake epoxy and gloss topcoat — Long Island NY",
    gallery: [
      {
        src: "/images/commercial-dealership.png",
        alt: "Auto dealership service bay — full-broadcast flake epoxy system, Long Island",
      },
      {
        src: "/images/commercial-warehouse.png",
        alt: "Large commercial warehouse with gray solid epoxy floor and high-gloss topcoat, Long Island",
      },
    ],
  },
  "garage-floor-coating": {
    src: "/images/garage-metallic-hex-lights.png",
    alt: "Garage floor with gray and white metallic epoxy swirl, hexagonal LED ceiling lights — Long Island NY",
  },
  "polyaspartic-coatings": {
    src: "/images/polyaspartic-garage.png",
    alt: "Polyaspartic topcoat over full-broadcast flake — mirror-gloss finish on residential garage, Long Island NY",
  },
  "flake-epoxy": {
    src: "/images/flake-epoxy-closeup.png",
    alt: "Full-broadcast flake epoxy floor — blue, black, and white chip blend with gloss topcoat, Long Island NY",
  },
  "grind-and-seal": {
    src: "/images/grind-and-seal.jpg",
    alt: "Concrete grinding and surface prep for grind-and-seal floor coating — Long Island NY",
  },
  "metallic-epoxy": {
    src: "/images/metallic-blue-swirl.png",
    alt: "Metallic epoxy floor — ocean-blue swirl with silver highlights, bedroom installation Long Island",
    gallery: [
      {
        src: "/images/metallic-blue-swirl.png",
        alt: "Ocean-blue metallic epoxy swirl — interior bedroom, Long Island",
      },
      {
        src: "/images/metallic-dark-copper.png",
        alt: "Dark copper metallic epoxy — garage installation with mirror-gloss topcoat, Long Island",
      },
    ],
  },
};

export type ServiceCover = ServicePhoto & {
  /** True when using a real uploaded asset from /public */
  isPhoto: boolean;
  gallery?: ServicePhoto[];
};

export function getServiceCover(slug: ServiceSlug | string): ServiceCover {
  const key = slug as ServiceSlug;
  const local = LOCAL_COVERS[key];
  if (local) {
    return { ...local, isPhoto: true };
  }
  return {
    src: placeholderSrc(String(slug)),
    alt: `${String(slug).replace(/-/g, " ")} — service preview`,
    isPhoto: false,
  };
}
