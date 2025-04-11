import React from "react";

interface InputProps {
  value : string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange}) => {
  return(
    <input 
     type="number"
     value={value}
     onChange={onChange}
     className="inputBox">
     </input>
  )
}

export default Input;