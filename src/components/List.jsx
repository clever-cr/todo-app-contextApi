import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { useContext } from "react";
import { TiTick } from "react-icons/ti";
import TodoContext from "../context/TodoContext";
import { useState } from "react";
const List = () => {
  const {
    allTodos,
    handleDelete,
    todoCheck,
    handleEdit,
    editInput,
    handleEditInput,
  } = useContext(TodoContext);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="">
      {allTodos.map((todo, i) => {
        return (
          <div className="flex items-center justify-between w-[500px]">
            <label className="flex items-center space-x-2">
              <input
                value={editInput}
                type={`${isClicked ? "text" : "checkbox"}`}
                onChange={isClicked ? handleEditInput : () => todoCheck(i)}
                checked={todo.checked}
              />
              {todo.checked ? (
                <h1>
                  <del>{todo.text}</del>
                </h1>
              ) : (
                <h1>{todo.text}</h1>
              )}
            </label>
            {isClicked ? (
              <TiTick onClick={() => handleEdit(i)} />
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
