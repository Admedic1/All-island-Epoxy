export type ServiceSlug =
  | "garage-floor-coating"
  | "metallic-epoxy"
  | "flake-epoxy"
  | "grind-and-seal"
  | "commercial-epoxy"
  | "polyaspartic-coatings";

export type ServiceItem = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string[];
  bullets: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "garage-floor-coating",
    title: "Garage Floor Coatings",
    shortDescription:
      "Full-flake systems built for hot tires, spills, and daily wear.",
    description: [
      "Turn your garage into a clean, durable workspace with a professional flake system and tough clear topcoat.",
      "We prep concrete correctly—because coating without preparation never lasts.",
    ],
    bullets: [
      "Ideal for 1-, 2-, and 3+ car garages",
      "Moisture-aware prep and crack repair options",
      "High-build finish that wipes clean",
    ],
  },
  {
    slug: "metallic-epoxy",
    title: "Metallic Epoxy",
    shortDescription:
      "High-end movement and depth for standout residential spaces.",
    description: [
      "Metallic coatings deliver a custom, luxury finish perfect for show garages and specialty interiors.",
      "We blend installation discipline with artistry—no muddy mixes or uneven clears.",
    ],
    bullets: [
      "Custom movement patterns",
      "Clear-coated for gloss and protection",
      "Great for statement floors",
    ],
  },
  {
    slug: "flake-epoxy",
    title: "Flake / Chip Epoxy",
    shortDescription:
      "The classic Long Island favorite—texture, traction, and toughness.",
    description: [
      "Flake systems hide imperfections, improve grip, and look incredible under garage lighting.",
      "Owner-led crews mean consistent broadcasts and crisp edges—every time.",
    ],
    bullets: [
      "Popular blends available",
      "Full flake broadcast options",
      "Family-friendly texture",
    ],
  },
  {
    slug: "grind-and-seal",
    title: "Grind & Seal",
    shortDescription:
      "Modern concrete look with controlled sheen and durable protection.",
    description: [
      "Perfect when you want concrete aesthetics without the plastic shine of bargain coatings.",
      "Diamond grinding opens the surface so sealers bond properly.",
    ],
    bullets: [
      "Clean industrial aesthetic",
      "Good for interior concrete floors",
      "Maintained with simple cleaning",
    ],
  },
  {
    slug: "commercial-epoxy",
    title: "Commercial Epoxy",
    shortDescription:
      "Shop floors, warehouses, offices—installed with minimal downtime.",
    description: [
      "Commercial environments demand scheduling discipline and systems thinking—not guesswork.",
      "We coordinate access, staging, and curing expectations up front.",
    ],
    bullets: [
      "Warehouses, bays, retail, offices",
      "Optional slip-resistant textures",
      "Professional equipment and dust control",
    ],
  },
  {
    slug: "polyaspartic-coatings",
    title: "Polyaspartic Coatings",
    shortDescription:
      "Fast-cure protection when turnaround time matters.",
    description: [
      "Polyaspartic topcoats can be excellent when we need quick returns-to-service—proper prep still matters.",
      "We recommend systems based on your concrete condition and goals—not hype.",
    ],
    bullets: [
      "Fast cure profiles available",
      "UV-stable options",
      "Excellent abrasion resistance when specified correctly",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
