/** Helper function to non-nested, simple valued object diffs */

export function diff(a, b) {
  const result = { set: {}, delete: [] };
  for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (b[key] === undefined) {
      result.delete.push(key);
    } else if (a[key] !== b[key]) {
      result.set[key] = b[key];
    }
  }
  return result;
}

/** Helper function to apply object diff to an object */

export function apply(object, diff) {
  const result = { ...object, ...diff.set };
  for (const key of diff.delete) {
    delete result[key];
  }
  return result;
}
