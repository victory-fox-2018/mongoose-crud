module.exports = function(next){
    this.due_date.setDate(this.due_date.getDate()+this.days)
    this.in_date.setDate(this.in_date.getDate()+this.days+2)
    next()
}