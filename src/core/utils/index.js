import moment from 'moment'

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

 export const calculateSumOfNumbers =(numbers) => {
    const sum = numbers.reduce((a,b)=>{
    return a+b
    },0)
    return sum
}
 
