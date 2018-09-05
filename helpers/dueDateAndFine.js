class DueDateAndFine {

    static due_date(out_date, days) {
        if(!out_date) {
            out_date = Date.now()
            return new Date(out_date + days * 86400000)
        } else {
            return new Date((new Date(out_date.slice(0, 4), out_date.slice(5, 7), out_date.slice(8, 10)).getTime()) + days * 86400000)
        }
    }

    static fine(out_date, in_date, days) {
        if(!out_date) {
            out_date = Date.now()
        }
        return Math.round(((new Date(in_date.slice(0, 4), in_date.slice(5, 7), in_date.slice(8, 10)).getTime()) - out_date - (days * 86400000)) / 86400)
    }
}

module.exports = DueDateAndFine