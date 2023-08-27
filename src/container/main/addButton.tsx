import { kButton, kInputFormWrap, kTodoInput } from "@/styles/main/style";
import { ChangeEvent, FormEvent, memo, useCallback, useState } from "react";

interface TodoAddProps {
  addTodo: (content: string) => void;
}

const TodoAdd = ({ addTodo }: TodoAddProps) => {
  const [content, setContent] = useState("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);
  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setContent((prev) => {
      addTodo(prev);
      return "";
    });
  }, []);

  return (
    <form onSubmit={onSubmit} style={kInputFormWrap}>
      <input
        type="text"
        style={kTodoInput}
        value={content}
        onChange={onChange}
      />
      <button type="submit" style={kButton}>
        추가
      </button>
    </form>
  );
};

export default memo(TodoAdd);
