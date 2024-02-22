module.exports.users = require("./users");

module.exports.convertTZ = function convertTZ(date) {
    return date.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })
}
