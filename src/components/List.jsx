import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSerch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase)
    );
  };

  const filteredTodos = getFilterdData();

  return (
    <div className="List">
      <h4>Todo List✨</h4>
      <input
        value={search}
        onChange={onChangeSerch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
