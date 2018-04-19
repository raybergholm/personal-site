export const generateClassName = (baseName, extras) => {
  const DELIMITER = " ";
  const result = [];

  if (baseName) {
    result.push(baseName);
  }
  if (extras && extras instanceof Array) {
    for (const extra of extras) {
      result.push(extra);
    }
  }
  return result.join(DELIMITER);
};