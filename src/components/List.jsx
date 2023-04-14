import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { useContext } from "react";
import { TiTick } from "react-icons/ti";
import TodoContext from "../context/TodoContext";
import { useState } from "react";

const List = () => {
  const { allTodos, handleDelete, todoCheck, setAllTodos } =
    useContext(TodoContext);
  const [isClicked, setIsClicked] = useState(false);
  const [editInput, setEditInput] = useState("");

  const handleEditInput = (event) => {
    setEditInput(event.target.value);
  };

  const updateTodo = (i) => {
    setAllTodos((prevtodos) => {
      return prevtodos.map((item, index) => {
        return index === i ? { ...item, text: editInput } : item;
      });
    });
    setIsClicked(!isClicked);
  };

  const handleEdit = (i) => {
    const text = allTodos.map((item, index) => {
      if (index === i) return item.text;
    });
    setEditInput(text);
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {allTodos.map((todo, i) => {
        return (
          <div className="flex items-center justify-between w-[500px]">
            <label className="flex items-center space-x-2">
              <input
                value={isClicked && editInput}
                type={`${isClicked ? "text" : "checkbox"}`}
                onChange={isClicked ? handleEditInput : () => todoCheck(i)}
                checked={todo.checked}
              />
              {todo.checked ? (
                <h1>
                  <del>{todo.text}</del>
                </h1>
              ) : (
                !isClicked && <h1>{todo.text}</h1>
              )}
            </label>
            {isClicked ? (
              <TiTick onClick={() => updateTodo(i)} />
            ) : (
              <AiTwotoneEdit onClick={() => handleEdit(i)} />
            )}
            <AiTwotoneDelete onClick={() => handleDelete(i)} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
