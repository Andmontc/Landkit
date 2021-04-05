export const getFromLocalStorageOrDefault = (key, defaultValue = null) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};
