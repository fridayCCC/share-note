import { kToggleCheckBox } from "@/styles/main/style";
import { TodoItem } from "@/types/data";
import { ChangeEvent, memo, useCallback } from "react";

interface TodoToggleProps {
  onToggle: (id: number, checked: boolean) => void;
  todo: TodoItem;
}

const TodoToggle = ({ onToggle, todo }: TodoToggleProps) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onToggle(todo.id, e.target.checked);
    },
    [onToggle, todo]
  );
  return <input type="checkbox" style={kToggleCheckBox} onChange={onChange} />;
};

export default memo(TodoToggle);
