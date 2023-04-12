import { useState, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [editInput, setEditInput] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const handleChange = (event) => setInputValue(event.target.value);
  const handleEditInput = (event) => {
    setEditInput(event.target.value);
  };
  const handleAdd = () => {
    if (inputValue == "") {
      alert("Add a todo");
    } else {
      setAllTodos((prevtodo) => [
        { text: inputValue, checked: false },
        ...prevtodo,
      ]);
    }
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
  const handleEdit = (i) => {
    setEditInput(text);
    setAllTodos((prevtodos) => {
      return prevtodos.map((item, index) => {
        return index === i ? { ...item, text: editInput } : item;
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
        handleEdit,
        editInput,
        handleEditInput,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
