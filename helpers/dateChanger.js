const dateChanger = (dateStr) => {
    
    let dateArr = dateStr.split('-')
    let date = new Date(dateArr[0],dateArr[1],dateArr[2])

    return date
}

module.exports = dateChanger