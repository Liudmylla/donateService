import { DonateForm } from "./donate-form"

export default class App {
    constructor(){
        this.donateForm = new DonateForm()
    }
  
    run(){
     const formBlockHTML = this.donateForm.render()
      document.body.append(formBlockHTML)
    }
}