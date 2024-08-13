export default function updateUniqueItems(someMap) {
  if (!(someMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, val] of someMap) {
    if (val === 1) {
      someMap.set(key, 100);
    }
  }

  return someMap;
}
