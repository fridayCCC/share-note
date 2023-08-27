import { memo, useCallback } from "react";
import { IProps } from "./type";

const Component = <T extends any>({
  id,
  style,
  children,
  onClick,
}: IProps<T>) => {
  const onButtonClick = useCallback(() => {
    if (onClick) onClick(id);
  }, [onClick]);
  return (
    <button style={style} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Component;
