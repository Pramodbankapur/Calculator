import { useEffect } from "react";
import { calculationReducer, initalState } from "./useReducerCalculation";
import { narrowOperator } from "./narrowOperator";

type Dispatch = React.Dispatch<any>;

export function useKeyboard(dispatch: Dispatch) {

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            const { key } = event;

            //Numbrer 0-9
            if (!isNaN(Number(key))) {
                dispatch({ type: 'NUMBER', payload: key });
            }

            //Decimal
            if (key === '.') {
                dispatch({ type: 'NUMBER', payload: key });
            }

            //Operator
            if (narrowOperator(key)) {
                dispatch({ type: 'OPERATOR', payload: key });
            }

            //Equals
            if (key === 'Enter' || key === '=') {
                dispatch({ type: 'EQUALS' })
            }

            //Clear
            if (key === 'Escape') {
                dispatch({ type: 'CLEAR' })
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // BackSpace
            // if(key === 'BackSpace'){
            //     dispatch({type:'DELETE'}) // need to implement...
            // } 
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        }
        document.addEventListener('keydown', listener);
        return () => document.removeEventListener('keydown', listener)
    }, [dispatch])
}   