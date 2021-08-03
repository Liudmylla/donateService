import {mockDonates as donates} from '../core/utils/const'

export class DonateList {
    
    constructor(donates){
        this.donates = donates
        this.mainDonateContainer = document.createElement('div')
        this.mainDonateContainer.className ='donates-container'
        
       
    }

    createDonateItem(donateContainerDonates){
        
        donates.forEach(donate => {
           
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            const amount =document.createElement('b')
            amount.textContent = `${donate.amount} $`
            donateItem.textContent = `${donate.date} - `
            donateItem.append(amount)
            donateContainerDonates.append(donateItem)
        });

   
       
    }

    render(){
        const donateContainerTitleHTML = document.createElement('h2')
        donateContainerTitleHTML.className = 'donates-container__title'
        donateContainerTitleHTML.textContent = 'Список донатов'

        const donateContainerDonates = document.createElement('div')
        donateContainerDonates.className ='donates-container__donates'

       this.createDonateItem(donateContainerDonates)

       this.mainDonateContainer.append(donateContainerTitleHTML,donateContainerDonates)
       
       return this.mainDonateContainer
    }
}