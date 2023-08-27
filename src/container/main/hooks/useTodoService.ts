import { TodoService } from "@/service/todo";
import { TodoItem } from "@/types/data";
import { useEffect, useState } from "react";
import { Subscription } from "rxjs";

const useTodoService = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const todoData$: Subscription = TodoService.todoData$.subscribe(
      (v: TodoItem[]) => setTodos(v)
    );
    return () => todoData$.unsubscribe();
  }, []);

  const onDelete = (id: number) => TodoService.deleteTodo(id);
  const onCreate = (content: string) => TodoService.addTodo(content);
  const onToggle = (id: number, checked: boolean) =>
    TodoService.toggleIsDone(id, checked);

  return {
    todos,
    onDelete,
    onCreate,
    onToggle,
  };
};

export default useTodoService;
