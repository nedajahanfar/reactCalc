import { useState } from 'react'
import Button from './components/button.tsx'
import Input from './components/inputBar.tsx'
import './App.css'


const App: React.FC = () =>{

  const [currentNumber,updateInputBox] = useState<string>("");
  const [operators, addOperator] = useState<string[]>([]);
  const [insertedNumbers, addNumber] = useState<number[]>([]);

  const handleClick = (operator: string) => {
    addOperator((prev) => [...prev,operator]);

    addNumber((prevNums) => [...prevNums,Number(currentNumber)]);

    updateInputBox("");

  }

  const calculation = (insertedNumbers : number[],operators: string[]) => {
    
    const numbers = [...insertedNumbers,Number(currentNumber)];

    if(numbers.length < 2 || operators.length === 0 ) return;

    let result = numbers[0];

    for(let i = 0 ; i < operators.length; i++){

      let nextNumber = numbers[i+1];
      let operator = operators[i];

      switch (operator){
       case "+":
        result += nextNumber;
        break;
       case "-":
        result -= nextNumber;
        break;
       case "*":
        result *= nextNumber;
        break;
       case "/":
        result /= nextNumber;
        break;
       default:
        break;  
    }
   }

    updateInputBox(result.toString());
    addOperator([]);
    addNumber([]);
  };

  return(
    <div className='App'>
        <Input value={currentNumber} onChange={(e) => updateInputBox(e.target.value)} ></Input>

       <div className='operators'>
         <Button onClick={() => {handleClick("+")}}>+</Button>
         <Button onClick={() => {handleClick("-")}}>-</Button>
         <Button onClick={() => {handleClick("*")}}>*</Button>
         <Button onClick={() => {handleClick("/")}}>/</Button>
         <Button onClick={() => {calculation(insertedNumbers,operators)}}>=</Button>
       </div>

        <div className='number-row'>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "1"))}}>1</Button>
          <Button  onClick={() => {updateInputBox(currentNumber => (currentNumber + "2"))}} >2</Button>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "3"))}} >3</Button>
        </div>

        <div className='number-row'>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "4"))}}>4</Button>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "5"))}} >5</Button>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "6"))}} >6</Button>
        </div>

        <div className='number-row'>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "7"))}} >7</Button>
          <Button onClick={() => {updateInputBox(currentNumber => (currentNumber + "8"))}} >8</Button>
          <Button  onClick={() => {updateInputBox(currentNumber => (currentNumber + "9"))}} >9</Button>
        </div>

        <div className='number-row'>
          <Button  onClick={() => {updateInputBox(currentNumber => (currentNumber + "0"))}} >0</Button>
        </div>

    </div>
  )
}

export default App
