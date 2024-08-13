export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const output = [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join('-');

  return output;
}
