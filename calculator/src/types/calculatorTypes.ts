export type Operator = '+'|'-'|'*'|'/';

export type CalculatorState = {
    display:string;
    storedNumber:number|null;
    operator:Operator|null;
    isTyping:boolean;
}

export type CalculatorAction = 
|{type:'NUMBER';payload:string}
|{type:'OPERATOR';payload:Operator}
|{type:'EQUALS'}
|{type:'CLEAR'}
