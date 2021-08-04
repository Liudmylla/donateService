import {Setting as Set } from '../core/constants/setting'
export class DonateForm {
    constructor(totalAmount,createNewDonate){
        this.createNewDonate = createNewDonate
        this.totalAmount = totalAmount
        this.formContainer = document.createElement('form')
        this.formContainer.className ='donate-form'
    }
    updateTotalAmount(newAmount) {
        return `${newAmount} ${Set.currency} `
    }

    render() {
        
        const totalAmountHTML = document.createElement( 'h1')
        totalAmountHTML.id = 'total-amount'
        totalAmountHTML.textContent = this.updateTotalAmount(this.totalAmount)

        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = `Введите сумму в ${Set.currency}`

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

        this.formContainer.append(totalAmountHTML,label,btnHTML)
        this.formContainer.addEventListener('submit',(event)=>{
            event.preventDefault()
            const {target} = event
            const newDonate = {
                date: new Date(),
                amount: Number (target.amount.value)
            }
           
            this.createNewDonate(newDonate)
            target.amount.value = ''


        })
        return this.formContainer
    }
}