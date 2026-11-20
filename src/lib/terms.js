const SEASONS = { F: "Fall", S: "Spring" };

export function splitTerms(text) {
  const pattern = /\b([FS])(\d{2})\b/g;
  const parts = [];
  let lastIndex = 0;
  let match = pattern.exec(text);
  while (match) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ code: match[0], label: `${SEASONS[match[1]]} 20${match[2]}` });
    lastIndex = pattern.lastIndex;
    match = pattern.exec(text);
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
