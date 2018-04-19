export const generateClassName = (tokens) => {
  const DELIMITER = " ";
  return tokens.join(DELIMITER);
};