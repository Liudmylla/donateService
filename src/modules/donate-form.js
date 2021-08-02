export class DonateForm {
    constructor(){
        this.formContainer = document.createElement('form')
        this.formContainer.className ='donate-form'
    }

    render() {
        const totalAmount = document.createElement( 'h1')
        totalAmount.id = 'total-amount'
        totalAmount.textContent ='28$'

        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = 'Введите сумму в $'

        const inputHTML = document.createElement('input')
        inputHTML.className = 'donate-form__donate-input'
        inputHTML.name = 'amount'
        inputHTML.type = 'number'
        inputHTML.max = '100'
        inputHTML.min = '0'
        inputHTML.required = ''

        label.append(inputHTML)

        const btnHTML = document.createElement('button')
        btnHTML.className = 'donate-form__submit-button'
        btnHTML.type = 'submit'
        btnHTML.textContent = 'Задонатить'

        this.formContainer.append(totalAmount,label,btnHTML)

        return this.formContainer
    }
}