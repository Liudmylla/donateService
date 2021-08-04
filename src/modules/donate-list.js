import {mockDonates as donates} from '../core/utils/const'
import {Setting as Set } from '../core/constants/setting'
export class DonateList {
    
    constructor(donates){
        this.donates = donates
        this.mainDonateContainer = document.createElement('div')
        this.mainDonateContainer.className ='donates-container'
        
       
    }

     createListElement = item => {
        const element = `<div class="donate-item">${item.date} — <b>${item.amount}${Set.currency}</b></div>`
        return element
      }
    
      createList = () => {
        const list = this.donates.map(item => {
          return this.createListElement(item)
        }).join('')
    
        return list
      }

      updateDonates = updatedDonates => {
        this.donates = updatedDonates
        this.render()
      }
    
      createView = () => {
        const donateContainerTitleHTML = document.createElement('h2')
        donateContainerTitleHTML.className = 'donates-container__title'
        donateContainerTitleHTML.textContent = 'Список донатов'

        const donateContainerDonates = document.createElement('div')
        donateContainerDonates.className ='donates-container__donates'

       donateContainerDonates.innerHTML = this.createList()

       this.mainDonateContainer.append(donateContainerTitleHTML,donateContainerDonates)
      }

    render(){
       this.mainDonateContainer.innerHTML = ''
       this.createView()
       return this.mainDonateContainer
    }
}