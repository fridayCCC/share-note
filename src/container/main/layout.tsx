import { PropsWithChildren, memo } from "react";
import CSS from "csstype";

interface TodoWrapProps extends PropsWithChildren {
  style: CSS.Properties;
}

const TodoWrap = ({ style, children }: TodoWrapProps) => {
  return <div style={style}>{children}</div>;
};

export default memo(TodoWrap);
