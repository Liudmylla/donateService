import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"
import * as utils from "../core/utils"
import {mockDonates } from '../core/utils/const'
import {Setting as Set } from '../core/constants/setting'
export default class App {
    
    constructor(donates){
        this.state = {
            donates: donates,
            totalAmount: 0
        }
        this.state.donates = [...mockDonates]
     
  
    }
    totalDonatedAmount() {
        const sum = this.state.donates.map(el =>el.amount)
        return utils.calculateSumOfNumbers(sum)
      
    }

   dateFormat(array) {
       const result = array.map(item =>{
           const date = utils.getFormattedTime(item.date)
           return {...item,date}
       })
       return result
   }
    createNewDonate(newDonate) {
        const [donate]= this.dateFormat([newDonate])
        this.state.donates = [donate, ...this.state.donates]
       
        this.state.totalAmount = this.totalDonatedAmount()
        //this.state.totalAmount += donate.amount
        const amountNum = document.querySelector('#total-amount')
        amountNum.textContent =`${this.state.totalAmount}${Set.currency}`
        //console.log(this.totalDonatedAmount())
        this.donateList.updateDonates(this.state.donates)
        this.donateForm.updateTotalAmount(this.state.totalAmount)
    }
  
    run(){
   
      this.state.totalAmount = this.totalDonatedAmount()
      this.state.donates = this.dateFormat(this.state.donates)
      
      this.donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
      this.donateList = new DonateList(this.state.donates)

      const formBlockHTML = this.donateForm.render()
      document.body.append(formBlockHTML)

      const donateListHTML = this.donateList.render()
      document.body.append(donateListHTML)
      
      
      
      
    }
}