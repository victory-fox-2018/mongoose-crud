function dueDate(num) {
    var d = new Date()
    return d.setDate(d.getDate() + Number(num));
}

function fine(dueDate) {
    var d = new Date()
    let fine = (d.getDate() - dueDate)*1000
    if (fine > 0) return fine
    else return 0
}

module.exports = { dueDate, fine }