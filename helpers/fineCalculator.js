const fineCalculator = (dueDate,inDate) => {
    
    let inDateArr = inDate.split('-')

    let days = Math.ceil(( new Date(inDateArr[0], inDateArr[1], inDateArr[2]) - dueDate) / 86400000)
    
    console.log(days);
    
    return days*500
}

module.exports = fineCalculator