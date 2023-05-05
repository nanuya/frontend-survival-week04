export const makeUniqueId = (prefix?: string) => {
  const uniqueId = `${Date.now()}`;

  if (!prefix) return uniqueId;

  return `${prefix}${uniqueId}`;
};
