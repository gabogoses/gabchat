var moment = require("moment");

// var date = moment();
// console.log(date.format("DD MMM YYYY"));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format("h:mm"));
