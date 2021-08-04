import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"
import {mockDonates as donates} from '../core/utils/const'
export default class App {
    
    constructor(){
        this.state = {
            donates: [],
            totalAmount: 0
        }
        this.state.donates = [...donates]
        this.donateForm = new DonateForm(this.state.totalAmount,this.createNewDonate.bind(this))
        this.donateList =  new DonateList(this.state.donates)
  
    }
    createNewDonate(newDonate) {
        this.state.donates = [newDonate, ...this.state.donates]
        this.state.totalAmount += newDonate.amount
        this.donateList.updateDonates(this.state.donates)
        this.donateForm.updateTotalAmount(this.state.totalAmount)
    }
  
    run(){
     const formBlockHTML = this.donateForm.render()
      document.body.append(formBlockHTML)

      const donateListHTML = this.donateList.render()
      document.body.append(donateListHTML)
    }
}