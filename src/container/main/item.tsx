import { kTodoContentTitlte } from "@/styles/main/style";
import { TodoItem } from "@/types/data";
import { memo } from "react";

interface TodoProps {
  todo: TodoItem;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <p
      style={{
        ...kTodoContentTitlte,
        textDecoration: todo.isDone ? "line-through" : "none",
      }}
    >
      {todo.content}
    </p>
  );
};

export default memo(Todo);
