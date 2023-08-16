import { ref } from 'vue';
import { useLocalStorage } from './useLocalStorage.js';

export const useTodo = () => {
  const { getArrayFromLocalStorage, setArrayToLocalStorage } = useLocalStorage();
  const todoArray = ref(getArrayFromLocalStorage());

  const addTodo = (todo) => {
    todoArray.value.push({
      ...todo,
      id: Date.now()
    });
    setArrayToLocalStorage(todoArray.value);
  };
  const deleteTodo = (id) => {
    todoArray.value = todoArray.value.filter(el => el.id !== id);
    setArrayToLocalStorage(todoArray.value);
  };
  const editTodo = ([toChange, id, value = '']) => {
    todoArray.value = todoArray.value.map(el => {
      if (el.id === id) {
        if (toChange === 'title') return { ...el, title: value };
        if (toChange === 'completed') return { ...el, completed: !el.completed };
      }
      return el;
    });
    setArrayToLocalStorage(todoArray.value);
  };

  return {
    todoArray,
    addTodo,
    deleteTodo,
    editTodo
  };
};