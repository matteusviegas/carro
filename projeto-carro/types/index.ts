import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String;
    containerSyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }
  