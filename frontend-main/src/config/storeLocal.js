export const storeLocal = (key, value) => {
  const x = localStorage.setItem(key, value);
  return x;
};
export const getLocal = (key) => {
  const x = localStorage.getItem(key);
  return x;
};
