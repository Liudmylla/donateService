import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"
import {mockDonates as donates} from '../core/utils/const'
export default class App {
    
    constructor(){
        this.donateForm = new DonateForm()
        this.donateList =  new DonateList(donates)
  
    }
  
    run(){
     const formBlockHTML = this.donateForm.render()
      document.body.append(formBlockHTML)

      const donateListHTML = this.donateList.render()
      document.body.append(donateListHTML)
    }
}