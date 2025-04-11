import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({children,onClick}: ButtonProps){
  return <button onClick={onClick} type="button">{children}</button>
}

export default Button;