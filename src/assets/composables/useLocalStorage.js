export const useLocalStorage = () => {
  const getArrayFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todoArray')) || [];
  };

  const setArrayToLocalStorage = (array) => {
    localStorage.setItem('todoArray', JSON.stringify(array));
  };

  return {
    getArrayFromLocalStorage,
    setArrayToLocalStorage
  };
};