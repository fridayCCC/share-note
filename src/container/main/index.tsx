import { kButtonWrap, kListWrap, kTodoContentWrap } from "@/styles/main/style";
import useTodoService from "./hooks/useTodoService";
import TodoWrap from "./layout";
import TodoAdd from "./addButton";
import Todo from "./item";
import TodoDeleteButton from "./deleteButton";
import TodoToggle from "./toggleButton";

import { TodoItem } from "@/types/data";

const TodoPages = () => {
  const { todos, onCreate, onDelete, onToggle } = useTodoService();

  return (
    <TodoWrap style={kListWrap}>
      <TodoAdd addTodo={onCreate} />
      {!!todos &&
        todos.map((item: TodoItem) => (
          <TodoWrap style={kTodoContentWrap} key={item.id}>
            <Todo todo={item}></Todo>
            <TodoWrap style={kButtonWrap}>
              <TodoDeleteButton onDelete={onDelete} todoId={item.id} />
              <TodoToggle onToggle={onToggle} todo={item}></TodoToggle>
            </TodoWrap>
          </TodoWrap>
        ))}
    </TodoWrap>
  );
};

export default TodoPages;
