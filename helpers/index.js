
module.exports = {
    convertDate : function (param){
        
        let temp = param.split('/')
        let convertDate = new Date(temp[0],temp[1],temp[2])
        return convertDate
    },

    helperDueDate(outDate, days){

        let day = days
        let date = outDate
        date.setDate(date.getDate() + Number(day))

        return date
       
    }
}
