import { useReducer } from "react";
import { calculationReducer, initalState } from "../features/useReducerCalculation";
import { useKeyboard } from "../features/useKeyboard";
import style from './style.module.css'


export default function Calculator() {
    const [state, dispatch] = useReducer(calculationReducer, initalState);
    useKeyboard(dispatch); // 🔥 THIS LINE enables keyboard support

    return (
        <div  className={style.calculator}>
            <div className={style.display}>{state.display}</div>
            <div className={style.keys}>
                <button className={style.clearbutton} onClick={() => dispatch({ type: "CLEAR" })}>C</button>
                {/* Numbers */}
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '1' })}>1</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '2' })}>2</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '3' })}>3</button>
                <button className={style.operator} onClick={() => dispatch({ type: "OPERATOR", payload: '+' })}>+</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '4' })}>4</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '5' })}>5</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '6' })}>6</button>
                <button className={style.operator} onClick={() => dispatch({ type: "OPERATOR", payload: '-' })}>-</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '7' })}>7</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '8' })}>8</button>
                <button onClick={() => dispatch({ type: 'NUMBER', payload: '9' })}>9</button>
                <button className={style.operator} onClick={() => dispatch({ type: "OPERATOR", payload: '*' })}>*</button>

                <button onClick={() => dispatch({ type: 'NUMBER', payload: '0' })}>0</button>
                {/* Operations */}
                <button className={style.operator} onClick={() => dispatch({ type: 'NUMBER', payload: '.' })}>.</button>
                <button className={style.operator} onClick={() => dispatch({ type: "OPERATOR", payload: '/' })}>/</button>
                {/* Equals */}
                <button className={style.equals} onClick={() => dispatch({ type: "EQUALS" })}>=</button>
                {/* Clear */}
                {/* BackSpace */}
                {/* Delete */}
            </div>
        </div>
    )
}