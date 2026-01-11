import type { Operator } from "../types/calculatorTypes";

export function narrowOperator(key:string): key is Operator{
    return ['+','-','*','/'].includes(key)
}