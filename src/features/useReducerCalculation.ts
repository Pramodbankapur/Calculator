import type { CalculatorAction, CalculatorState } from "../types/calculatorTypes";
import { calculation } from "./calculation";

export const initalState: CalculatorState = {
    display: '0',
    storedNumber: null,
    operator: null,
    isTyping: false,
}

export function calculationReducer(
    state: CalculatorState,
    action: CalculatorAction
): CalculatorState {
    switch (action.type) {
        case 'NUMBER': {
            if (action.payload === '.' && state.display.includes('.')) {
                return state
            }
            else if (action.payload === '.' && !state.isTyping) {
                return {
                    ...state,
                    display: '0.',
                    isTyping: true,
                }
            }
            else {
                const newDisplay = state.isTyping
                    ? state.display + action.payload
                    : action.payload;
                return {
                    ...state,
                    display: newDisplay,
                    isTyping: true
                }
            }
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 'OPERATOR': {
            if(state.isTyping && state.storedNumber!==null&&state.operator!==null){
                const result = calculation(state.storedNumber,Number(state.display),state.operator);
                return{
                    ...state,
                    display:String(result),
                    storedNumber:result,
                    isTyping:false,
                    operator:action.payload,
                }
            }

            if(state.isTyping){
                return{
                    ...state,
                    operator:action.payload,
                    storedNumber:Number(state.display),
                    isTyping:false,
                }
            }
            else{
                return {
                    ...state,
                    operator: action.payload,
                }
            }
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 'EQUALS': {
            if (state.storedNumber === null || state.operator === null) {
                return state; // do nothing
            }
            const result = calculation(
                state.storedNumber,
                Number(state.display),
                state.operator,
            );

            return {
                display: String(result),
                storedNumber: null,
                operator: null,
                isTyping: false,
            }
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 'CLEAR':
            return initalState;

        default:
            return state
    }
}