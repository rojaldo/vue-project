export class Card {

    private _question = ''
    private _category = ''
    private _type = ''
    private _difficulty = ''
    private _correctAnswer = ''
    private _incorrectAnswers: string[] = []

    private _answers: string[] = []
    private _answered = false
    private _correctAnswered?: boolean = undefined
    private _userAnswer = ''

    constructor(json?: any) {
        if (json) {
            this._question = json.question
            this._category = json.category
            this._type = json.type
            this._difficulty = json.difficulty
            this._correctAnswer = json.correct_answer
            this._incorrectAnswers = json.incorrect_answers
            this._answers = [...this._incorrectAnswers, this._correctAnswer]
        }
    }

    get question() {
        return this._question
    }

    get category() {
        return this._category
    }

    get type() {
        return this._type
    }

    get difficulty() {
        return this._difficulty
    }

    get correctAnswer() {
        return this._correctAnswer
    }

    get incorrectAnswers() {
        return this._incorrectAnswers
    }

    get answers() {
        return this._answers
    }

    get answered() {
        return this._answered
    }

    set answered(answered: boolean) {
        this._answered = answered
    }

    get correctAnswered() {
        return this._correctAnswered
    }

    get userAnswer() {
        return this._userAnswer
    }

    checkRightAnswer(answer: string) {
        this._correctAnswered = this._correctAnswer === answer
        this._userAnswer = answer
    }
    
}