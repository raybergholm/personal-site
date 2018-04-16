export const generateClassName = (baseName, extras) => {
  const DELIMITER = " ";
  const result = [];

  if (baseName) {
    result.push(baseName);
  }
  if (extras) {
    result.concat(extras);
  }
  return result.join(DELIMITER);
};