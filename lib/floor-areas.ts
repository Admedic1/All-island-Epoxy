import type { ReviewJobType } from "./reviews-all";

export type ColorChip = {
  name: string;
  /** One-line description of the blend character */
  character: string;
  /** 3–4 hex values rendered as a CSS gradient swatch to mimic a chip sample */
  swatchColors: string[];
  popular?: boolean;
};

export type FloorAreaSlug = "garage" | "basement";

export type FloorArea = {
  slug: FloorAreaSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Short eyebrow label */
  label: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  /** What makes this surface uniquely challenging */
  challenges: { heading: string; body: string }[];
  colorChips: ColorChip[];
  faqs: { q: string; a: string }[];
  reviewJobType: ReviewJobType;
  /** Picsum seeds for gallery strip (first slot may be a real /images path) */
  gallerySeeds: string[];
};

// ─── US Resin Supply color chip blends ─────────────────────────────────────
// Blend names are actual US Resin Supply products.
// Swatch hex values are visual approximations of each multi-chip blend.

const CHIP_LIBRARY: Record<string, ColorChip> = {
  shoreline: {
    name: "Shoreline",
    character: "Warm tan, cream, and light brown — the most popular neutral for Long Island homes.",
    swatchColors: ["#D4B896", "#E8D5B8", "#A08060", "#C8A878"],
    popular: true,
  },
  orbit: {
    name: "Orbit",
    character: "Bold blue, black, and white — makes a statement in show garages and gyms.",
    swatchColors: ["#4A78C8", "#1A1A3A", "#E8E8F0", "#2A4A8A"],
    popular: true,
  },
  gravel: {
    name: "Gravel",
    character: "Clean light gray blend — bright, modern, low-contrast.",
    swatchColors: ["#C8C8C8", "#D8D8D8", "#E0E0E0", "#B8B8B8"],
    popular: true,
  },
  domino: {
    name: "Domino",
    character: "High-contrast black and white — sharp, classic, works in any space.",
    swatchColors: ["#E8E8E8", "#1A1A1A", "#F0F0F0", "#2A2A2A"],
    popular: true,
  },
  coyote: {
    name: "Coyote",
    character: "Tan, cream, and dark brown earth tones — pairs well with natural finishes.",
    swatchColors: ["#C8A870", "#9A7848", "#E0C898", "#6A4828"],
  },
  tidalWave: {
    name: "Tidal Wave",
    character: "Cool blue, gray, and white — coastal feel for basements and patios.",
    swatchColors: ["#7898B8", "#3A5878", "#B8C8D8", "#9AB0C0"],
    popular: true,
  },
  creekBed: {
    name: "Creek Bed",
    character: "Warm brown, tan, and beige — earthy and understated.",
    swatchColors: ["#9A8060", "#C0A078", "#7A6050", "#D8B890"],
  },
  nightfall: {
    name: "Nightfall",
    character: "Dark charcoal and slate gray — industrial and dramatic.",
    swatchColors: ["#484848", "#686868", "#2A2A2A", "#585868"],
  },
  wombat: {
    name: "Wombat",
    character: "Black, white, and gray mix — versatile and timeless.",
    swatchColors: ["#C8C8C8", "#1A1A1A", "#D8D8D8", "#484848"],
  },
  outback: {
    name: "Outback",
    character: "Tan, cream, and brown with dark contrast chips — warm and rich.",
    swatchColors: ["#D8C090", "#B89860", "#E8D8A8", "#786040"],
  },
};

// ─── AREAS ─────────────────────────────────────────────────────────────────

export const FLOOR_AREAS: FloorArea[] = [
  {
    slug: "garage",
    title: "Garage Floor Coating",
    metaTitle: "Garage Floor Epoxy Coating Long Island, NY | All Island Epoxy",
    metaDescription:
      "Professional garage floor epoxy coating across Long Island. Full-flake systems, metallic options, and polyaspartic topcoats — owner on every job. Call (631) 636-5667.",
    label: "Garage Floors",
    headline: "Garage Floor Epoxy Coating Long Island, NY",
    subheadline: "Full-flake systems that hold up to hot tires, oil, and daily abuse.",
    heroDescription:
      "Your garage floor takes more punishment than any surface in your home — hot tires, motor oil, salt, and constant foot traffic. A properly installed flake epoxy system transforms that punishment into a surface that cleans in minutes and looks like a showroom for years.",
    challenges: [
      {
        heading: "Hot tire pickup",
        body: "Bargain coatings delaminate under hot tires. We use high-build systems with polyaspartic topcoats rated for thermal cycling and chemical resistance.",
      },
      {
        heading: "Moisture and humidity",
        body: "Long Island garages see humidity swings year-round. We test concrete moisture before any coating touches the slab.",
      },
      {
        heading: "Oil and chemical staining",
        body: "Our seamless systems have no grout lines to absorb spills. A mop handles what would ruin bare concrete forever.",
      },
      {
        heading: "Salt and road grime",
        body: "Winter salt gets dragged in daily. The topcoat we use resists chloride penetration and cleans without degrading the surface.",
      },
    ],
    colorChips: [
      CHIP_LIBRARY.shoreline,
      CHIP_LIBRARY.gravel,
      CHIP_LIBRARY.domino,
      CHIP_LIBRARY.orbit,
      CHIP_LIBRARY.wombat,
      CHIP_LIBRARY.coyote,
      CHIP_LIBRARY.tidalWave,
      CHIP_LIBRARY.creekBed,
      CHIP_LIBRARY.nightfall,
      CHIP_LIBRARY.outback,
    ],
    faqs: [
      {
        q: "How long does a garage floor coating last?",
        a: "Properly installed flake systems with a polyaspartic topcoat typically last 10–20 years under normal residential use. Prep quality is the biggest factor — grinding beats acid etching every time.",
      },
      {
        q: "Can I park on it the same day?",
        a: "With polyaspartic topcoats, light foot traffic is often possible within hours. Vehicle traffic typically requires 24–48 hours depending on temperature and the system used. We confirm this with you at completion.",
      },
      {
        q: "Will the coating handle my hot tires?",
        a: "Yes — our full-broadcast flake systems with a polyaspartic topcoat are specifically rated for hot tire contact. We avoid systems that fail this test.",
      },
      {
        q: "Do you repair cracks before coating?",
        a: "Yes. Crack filling and surface prep happen before the first coat. We'll tell you honestly if any repairs are needed and what they involve.",
      },
      {
        q: "Can I choose my flake color and density?",
        a: "Yes. We carry a full range of US Resin Supply chip blends and offer full-broadcast (100% coverage) or partial-broadcast options. We'll show you samples before the job.",
      },
      {
        q: "What's the difference between epoxy and polyaspartic?",
        a: "Epoxy provides the bulk and adhesion in the base coat; polyaspartic is UV-stable and fast-curing, used as the topcoat. We use both in the same system — they serve different roles.",
      },
    ],
    reviewJobType: "Garage",
    gallerySeeds: [
      "/images/garage-metallic-hex-lights.png",
      "/images/metallic-lamborghini-garage.png",
      "/images/polyaspartic-garage.png",
      "/images/metallic-charcoal-silver.png",
    ],
  },
  {
    slug: "basement",
    title: "Basement Floor Coating",
    metaTitle: "Basement Floor Epoxy Coating Long Island, NY | All Island Epoxy",
    metaDescription:
      "Basement epoxy and grind-and-seal floor coatings across Long Island, NY. Moisture-aware prep, seamless finishes, owner on every job. Call (631) 636-5667.",
    label: "Basement Floors",
    headline: "Basement Floor Coating Long Island, NY",
    subheadline: "Moisture-aware systems that turn raw concrete into livable, cleanable space.",
    heroDescription:
      "A finished basement starts with the floor. The right coating seals moisture, eliminates concrete dust, and creates a surface that holds up to a home gym, a play area, or a living space. We evaluate moisture before we spec anything — no guesswork, no future failures.",
    challenges: [
      {
        heading: "Moisture vapor transmission",
        body: "Basements are ground-contact slabs. Moisture vapor from the soil can destroy coatings from underneath. We test first and choose systems that account for vapor pressure.",
      },
      {
        heading: "Efflorescence and old sealers",
        body: "White powder deposits and old paint or sealers must be fully removed before any new coating. We grind, don't etch — it's the only way to guarantee adhesion.",
      },
      {
        heading: "Low light conditions",
        body: "Basements often have limited natural light. Lighter chip blends and satin/semi-gloss topcoats dramatically brighten the space without additional fixtures.",
      },
      {
        heading: "Multi-use surfaces",
        body: "Basement floors take furniture legs, kids, gym equipment, and foot traffic. The system we specify handles all of it without chipping or peeling.",
      },
    ],
    colorChips: [
      CHIP_LIBRARY.gravel,
      CHIP_LIBRARY.domino,
      CHIP_LIBRARY.shoreline,
      CHIP_LIBRARY.wombat,
      CHIP_LIBRARY.tidalWave,
      CHIP_LIBRARY.nightfall,
      CHIP_LIBRARY.orbit,
      CHIP_LIBRARY.creekBed,
      CHIP_LIBRARY.coyote,
      CHIP_LIBRARY.outback,
    ],
    faqs: [
      {
        q: "Is epoxy safe for a basement with moisture issues?",
        a: "Moisture has to be assessed first — not assumed. We test for vapor transmission and select systems designed for your actual conditions. Skipping this step is why basement coatings fail.",
      },
      {
        q: "Epoxy or grind-and-seal for a finished basement?",
        a: "Grind-and-seal preserves the natural concrete look with a controlled sheen and is excellent for moisture-prone slabs. Full flake epoxy adds color, hides imperfections, and is great for playrooms or gyms. We'll recommend based on your slab.",
      },
      {
        q: "How do I prepare my basement for coating?",
        a: "Clear the floor completely. We handle all surface prep including grinding, crack repair, and cleaning. Any moisture mitigation steps are confirmed with you before work starts.",
      },
      {
        q: "Will it be slippery?",
        a: "We can add anti-slip aggregate to the topcoat for any area that needs it — stairs, entry points, anywhere that gets wet.",
      },
      {
        q: "Can you coat just part of my basement?",
        a: "Yes. We handle partial-floor jobs and design clean transitions where coated and uncoated areas meet.",
      },
    ],
    reviewJobType: "Basement",
    gallerySeeds: [
      "/images/basement-gray-flake-finished.png",
      "/images/basement-brown-metallic.png",
      "/images/basement-white-flake-large.png",
      "/images/metallic-white-basement.png",
      "/images/basement-gray-flake-stairs.png",
      "/images/basement-gray-flake-utility.png",
      "/images/metallic-brown-fireplace.png",
      "/images/basement-flake-closeup.png",
    ],
  },
];

export function getFloorAreaBySlug(slug: string): FloorArea | undefined {
  return FLOOR_AREAS.find((a) => a.slug === slug);
}
