import { useState, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleChange = (event) => setInputValue(event.target.value);

  const handleAdd = () => {
    if (inputValue == "") alert("Add a todo");
    setAllTodos((prevtodo) => [
      { text: inputValue, checked: false },
      ...prevtodo,
    ]);
    setInputValue("");
  };

  const handleDelete = (i) =>
    setAllTodos((prevtodo) => prevtodo.filter((item, index) => index !== i));
  const todoCheck = (i) => {
    setAllTodos((prevtodos) => {
      return prevtodos.map((item, index) => {
        return index === i ? { ...item, checked: !item.checked } : item;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{
        inputValue,
        allTodos,
        handleChange,
        handleAdd,
        handleDelete,
        todoCheck,
        setAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
