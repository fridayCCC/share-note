import CSS from "csstype";
import { PropsWithChildren } from "react";

export interface IProps<T> extends PropsWithChildren {
  style?: CSS.Properties;
  id: T;
  onClick?: (id: T) => void;
}
