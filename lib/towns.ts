export type Town = {
  slug: string;
  name: string;
  zip: string;
  county: "Nassau" | "Suffolk";
};

/** Nassau & Suffolk towns + zip for local landing pages */
export const TOWNS: Town[] = [
  // Nassau County
  { slug: "bethpage", name: "Bethpage", zip: "11714", county: "Nassau" },
  { slug: "carle-place", name: "Carle Place", zip: "11514", county: "Nassau" },
  { slug: "cedarhurst", name: "Cedarhurst", zip: "11516", county: "Nassau" },
  { slug: "east-hills", name: "East Hills", zip: "11576", county: "Nassau" },
  { slug: "east-rockaway", name: "East Rockaway", zip: "11518", county: "Nassau" },
  { slug: "farmingdale", name: "Farmingdale", zip: "11735", county: "Nassau" },
  { slug: "garden-city", name: "Garden City", zip: "11530", county: "Nassau" },
  { slug: "glen-cove", name: "Glen Cove", zip: "11542", county: "Nassau" },
  { slug: "great-neck", name: "Great Neck", zip: "11023", county: "Nassau" },
  { slug: "great-neck-estates", name: "Great Neck Estates", zip: "11021", county: "Nassau" },
  { slug: "hicksville", name: "Hicksville", zip: "11801", county: "Nassau" },
  { slug: "kings-point", name: "Kings Point", zip: "11024", county: "Nassau" },
  { slug: "lynbrook", name: "Lynbrook", zip: "11563", county: "Nassau" },
  { slug: "malverne", name: "Malverne", zip: "11565", county: "Nassau" },
  { slug: "mineola", name: "Mineola", zip: "11501", county: "Nassau" },
  { slug: "muttontown", name: "Muttontown", zip: "11732", county: "Nassau" },
  { slug: "new-hyde-park", name: "New Hyde Park", zip: "11040", county: "Nassau" },
  { slug: "old-brookville", name: "Old Brookville", zip: "11545", county: "Nassau" },
  { slug: "plainview", name: "Plainview", zip: "11803", county: "Nassau" },
  { slug: "roslyn-heights", name: "Roslyn Heights", zip: "11577", county: "Nassau" },
  { slug: "syosset", name: "Syosset", zip: "11791", county: "Nassau" },
  { slug: "westbury", name: "Westbury", zip: "11590", county: "Nassau" },

  // Suffolk County
  { slug: "bay-shore", name: "Bay Shore", zip: "11706", county: "Suffolk" },
  { slug: "bohemia", name: "Bohemia", zip: "11716", county: "Suffolk" },
  { slug: "brentwood", name: "Brentwood", zip: "11717", county: "Suffolk" },
  { slug: "central-islip", name: "Central Islip", zip: "11722", county: "Suffolk" },
  { slug: "cold-spring-harbor", name: "Cold Spring Harbor", zip: "11724", county: "Suffolk" },
  { slug: "commack", name: "Commack", zip: "11725", county: "Suffolk" },
  { slug: "deer-park", name: "Deer Park", zip: "11729", county: "Suffolk" },
  { slug: "dix-hills", name: "Dix Hills", zip: "11746", county: "Suffolk" },
  { slug: "east-northport", name: "East Northport", zip: "11731", county: "Suffolk" },
  { slug: "elwood", name: "Elwood", zip: "11731", county: "Suffolk" },
  { slug: "fort-salonga", name: "Fort Salonga", zip: "11768", county: "Suffolk" },
  { slug: "hauppauge", name: "Hauppauge", zip: "11788", county: "Suffolk" },
  { slug: "islandia", name: "Islandia", zip: "11749", county: "Suffolk" },
  { slug: "medford", name: "Medford", zip: "11763", county: "Suffolk" },
  { slug: "melville", name: "Melville", zip: "11747", county: "Suffolk" },
  { slug: "ronkonkoma", name: "Ronkonkoma", zip: "11779", county: "Suffolk" },
  { slug: "smithtown", name: "Smithtown", zip: "11787", county: "Suffolk" },
  { slug: "stony-brook", name: "Stony Brook", zip: "11790", county: "Suffolk" },
];

export function getTownBySlug(slug: string) {
  return TOWNS.find((t) => t.slug === slug);
}

export const NASSAU_TOWNS = TOWNS.filter((t) => t.county === "Nassau");
export const SUFFOLK_TOWNS = TOWNS.filter((t) => t.county === "Suffolk");
