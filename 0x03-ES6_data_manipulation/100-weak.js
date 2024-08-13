export const weakMap = new WeakMap();

export function queryAPI(endp) {
  let num = weakMap.get(endp) || 0;

  num += 1;
  weakMap.set(endp, num);
  if (num >= 5) {
    throw new Error('Endpoint load is high');
  }
}
