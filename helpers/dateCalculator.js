const dateCalculator = (outDate, days) => {

    outDate.setDate(outDate.getDate() + Number(days))
    
    return outDate
}

module.exports = dateCalculator