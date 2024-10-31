enum CalculatorState {
    INIT,
    FIRST_NUMBER,
    SECOND_NUMBER,
    RESULT
  }

export class Calculator {

    private _firstNumber = 0
    private _secondNumber = 0
    private _operator = ''
    private _result = 0
    private _currentState = CalculatorState.INIT
    public displayString = ''

    public readonly handleNumber = (num: number) => {
        switch (this._currentState) {
          case CalculatorState.INIT:
            this._firstNumber = num
            this._currentState = CalculatorState.FIRST_NUMBER
            this.displayString += num.toString()
            break
          case CalculatorState.FIRST_NUMBER:
            this._firstNumber = this._firstNumber * 10 + num
            this.displayString += num.toString() 
            break
          case CalculatorState.SECOND_NUMBER:
            this._secondNumber = this._secondNumber * 10 + num
            this.displayString += num.toString()
            break
          case CalculatorState.RESULT:
            this._clearCalculator()
            this._firstNumber = num
            this._currentState = CalculatorState.FIRST_NUMBER
            this.displayString += num.toString()
            break
        }
        
      }
      
      public readonly handleSymbol = (symbol: string) => {
        switch (this._currentState) {
          case CalculatorState.INIT:
            break
          case CalculatorState.FIRST_NUMBER:
            if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
              this._operator = symbol
              this._currentState = CalculatorState.SECOND_NUMBER
              this.displayString += symbol
            } 
            break
          case CalculatorState.SECOND_NUMBER:
            if (symbol === '=') {
              this._result = this._calculate()
              this.displayString += `=${this._result}`
              this._currentState = CalculatorState.RESULT
            } else {
              this._operator = symbol
              this.displayString += symbol
            }
            break
          case CalculatorState.RESULT:
            if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
              let tmp = this._result
              this._clearCalculator()
              this._firstNumber = tmp
              this._operator = symbol
              this._currentState = CalculatorState.SECOND_NUMBER
              this.displayString = this._firstNumber.toString() + symbol
            } 
            break
        }
      
      }
      
      private readonly _calculate = () => {
        switch (this._operator) {
          case '+':
            return this._firstNumber + this._secondNumber
          case '-':
            return this._firstNumber - this._secondNumber
          case '*':
            return this._firstNumber * this._secondNumber
          case '/':
            return this._firstNumber / this._secondNumber
          default:
            return 0
        }
      }
      
      private readonly _clearCalculator = () => {
        this._firstNumber = 0
        this._secondNumber = 0
        this._operator = ''
        this._result = 0
        this._currentState = CalculatorState.INIT
        this.displayString = ''
      }
      
}