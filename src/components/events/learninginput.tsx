import { useState } from "react"

export function LearnInput(){
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)

    function changeFirstNumber(e: any){
        setFirstNumber(parseInt(e.target.value))
    }
    function changeSecondNumber(e: any){
        setSecondNumber(parseInt(e.target.value))
    }
    return(<>
        <input type='number' onChange={changeFirstNumber}  value={firstNumber} />
        <input type='number' onChange={changeSecondNumber}  value={secondNumber} />
        <button onClick={() =>(setResult(firstNumber + secondNumber))}>klicka</button>
        <p>{result}</p>
    </>)
};