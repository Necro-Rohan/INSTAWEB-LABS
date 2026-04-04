export function normalizeGeography(geoString) {
  if (!geoString) return "";

  // Take everything BEFORE the first comma (Isolates the city)
  let cleanGeo = geoString.split(',')[0].trim();

  // Title Case the string (e.g, "boca raton" -> "Boca Raton")
  cleanGeo = cleanGeo.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

  return cleanGeo;
}

export const slugify = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};