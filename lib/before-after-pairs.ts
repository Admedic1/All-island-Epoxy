/** Real project pairs live in /public/images/before-after — add more entries as you upload. */

export type BeforeAfterPair = {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

/** Primary homepage / slider pair */
export const FEATURE_BEFORE_AFTER: BeforeAfterPair = {
  id: "garage-flake-01",
  label: "Residential garage — full-flake system",
  beforeSrc: "/images/before-after/garage-cracked-concrete-before.jpg",
  afterSrc: "/images/before-after/garage-flake-epoxy-after.jpg",
  beforeAlt:
    "Garage concrete floor with cracks and damage before epoxy coating",
  afterAlt:
    "Same garage with full-broadcast flake epoxy floor and gloss topcoat after installation",
};

/** Gallery grids can append placeholders after real pairs */
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  FEATURE_BEFORE_AFTER,
  {
    id: "garage-gray-flake-01",
    label: "Garage — gray full-flake system",
    beforeSrc: "/images/before-after/garage-cracked-stained-before.jpg",
    afterSrc: "/images/before-after/garage-gray-flake-after.jpg",
    beforeAlt: "Garage concrete floor with large cracks and oil stains before epoxy",
    afterAlt: "Same garage with full-broadcast gray flake epoxy and gloss topcoat after installation",
  },
  {
    id: "garage-gray-flake-02",
    label: "Garage — gray full-flake system",
    beforeSrc: "/images/before-after/garage-stained-concrete-before-2.jpg",
    afterSrc: "/images/before-after/garage-gray-flake-after-2.jpg",
    beforeAlt: "Bare concrete garage floor with oil stains before epoxy coating",
    afterAlt: "Same garage with full-broadcast gray flake epoxy and gloss topcoat after installation",
  },
  {
    id: "basement-gray-flake-01",
    label: "Basement — gray full-flake system",
    beforeSrc: "/images/before-after/basement-bare-concrete-before.jpg",
    afterSrc: "/images/before-after/basement-gray-flake-after.jpg",
    beforeAlt: "Bare concrete basement floor with old paint and stains before epoxy coating",
    afterAlt: "Finished basement with full-broadcast gray flake epoxy floor and staircase after installation",
  },
  {
    id: "garage-dark-flake-01",
    label: "Garage — dark multi-color flake system",
    beforeSrc: "/images/before-after/garage-cracked-large-before.jpg",
    afterSrc: "/images/before-after/garage-dark-multicolor-flake-after.jpg",
    beforeAlt: "Large garage concrete floor with deep cracks before epoxy coating",
    afterAlt: "Same garage with full-broadcast dark black, white, and red flake epoxy after installation",
  },
  {
    id: "commercial-bar-flake-01",
    label: "Commercial bar — dark flake system",
    beforeSrc: "/images/before-after/commercial-bar-concrete-before.jpg",
    afterSrc: "/images/before-after/commercial-bar-dark-flake-after.jpg",
    beforeAlt: "Stained bare concrete floor in a bar before commercial epoxy coating",
    afterAlt: "Same bar with dark full-broadcast flake epoxy floor after professional installation",
  },
  {
    id: "basement-light-gray-flake-01",
    label: "Basement — light gray full-flake system",
    beforeSrc: "/images/before-after/basement-old-tile-residue-before.jpg",
    afterSrc: "/images/before-after/basement-light-gray-flake-after.jpg",
    beforeAlt: "Basement floor with old tile adhesive residue and deteriorated surface before epoxy",
    afterAlt: "Same basement with clean full-broadcast light gray flake epoxy floor after installation",
  },
  {
    id: "bedroom-metallic-blue-01",
    label: "Interior room — metallic blue epoxy",
    beforeSrc: "/images/before-after/bedroom-bare-concrete-before.jpg",
    afterSrc: "/images/before-after/bedroom-metallic-blue-after.jpg",
    beforeAlt: "Interior room with bare prepped concrete floor before metallic epoxy coating",
    afterAlt: "Same room with stunning sky blue metallic epoxy floor with mirror-like gloss finish",
  },
  {
    id: "shop-metallic-black-gold-01",
    label: "Car shop — metallic black & gold epoxy",
    beforeSrc: "/images/before-after/shop-cracked-concrete-before.jpg",
    afterSrc: "/images/before-after/shop-metallic-black-gold-after.jpg",
    beforeAlt: "Car shop with two-post lift and cracked concrete floor before metallic epoxy",
    afterAlt: "Same car shop with dramatic black, white, and gold metallic swirl epoxy floor after installation",
  },
  {
    id: "commercial-metallic-marble-01",
    label: "Commercial space — metallic marble epoxy",
    beforeSrc: "/images/before-after/commercial-stripped-floor-before.jpg",
    afterSrc: "/images/before-after/commercial-metallic-marble-after.jpg",
    beforeAlt: "Commercial space with stripped flooring and debris before metallic epoxy",
    afterAlt: "Same commercial space with stunning black and white metallic marble swirl epoxy floor",
  },
  {
    id: "garage-metallic-charcoal-01",
    label: "Garage — metallic charcoal epoxy",
    beforeSrc: "/images/before-after/garage-peeling-paint-before.jpg",
    afterSrc: "/images/before-after/garage-metallic-charcoal-after.jpg",
    beforeAlt: "Garage floor with peeling old paint and bare concrete before metallic epoxy",
    afterAlt: "Same garage with high-gloss charcoal metallic swirl epoxy floor after installation",
  },
  {
    id: "metallic-brown-basement-01",
    label: "Basement — metallic brown epoxy",
    beforeSrc: "/images/before-after/commercial-demolished-floor-before.jpg",
    afterSrc: "/images/before-after/metallic-brown-basement-after.jpg",
    beforeAlt: "Demolished floor with old tile debris and damage before epoxy coating",
    afterAlt: "Finished basement with high-gloss metallic brown swirl epoxy floor",
  },
];
