import { GoPlus } from "react-icons/go";
import { useContext } from "react";
import TodoContext from "./context/TodoContext";
import List from "./components/List";

const App = () => {
  const { inputValue, handleChange, handleAdd } = useContext(TodoContext);

  return (
    <div>
      <div className="p-12 space-y-12">
        <h3 className="text-7xl text-gray-300">todos</h3>
        <div className="flex items-center  px-5 p-2 rounded-xl shadow-lg justify-between">
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Add todo..."
            name="todo"
            onChange={handleChange}
            value={inputValue}
          />

          <GoPlus
            onClick={handleAdd}
            className="bg-green-700 text-white rounded-full px-1 w-5 h-5"
          />
        </div>
        <List />
      </div>
    </div>
  );
};

export default App;
