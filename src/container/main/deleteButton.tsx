import { Button } from "@/component/button";
import { memo } from "react";

interface ITodoDeleteButtonProps {
  onDelete: (id: number) => void;
  todoId: number;
}

const TodoDeleteButton = ({ onDelete, todoId }: ITodoDeleteButtonProps) => {
  return (
    <Button id={todoId} onClick={onDelete}>
      삭제
    </Button>
  );
};

export default memo(TodoDeleteButton);
