import type { Operator } from "../types/calculatorTypes";


export function calculation(firstNumber:number,secondNumber:number,operator:Operator):number{
    switch(operator){
        case '+':
            return firstNumber+secondNumber;
        case '-':
            return firstNumber-secondNumber;
        case '*':
            return firstNumber*secondNumber;
        case '/':
            return firstNumber/secondNumber;
    }
}