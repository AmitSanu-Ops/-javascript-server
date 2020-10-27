"use strict";
// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }
// let users = [
//     {traineeEmail: 'TRAINER@successive.tech',reviewerEmail: 'reviewer1@successive.tech'
// },
// {traineeEmail: 'trae1@successive.tech',reviewerEmail: 'revierccessive.tech'
// },
// {traineeEmail: 'trainee1@successive.tech',reviewerEmail: 'reviewer1@successive.TECH'
// }
// ];
//users.forEach(([traineeEmail,reviewerEmail]) => console.log(traineeEmail+' '+reviewerEmail))
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateUsers = void 0;
let ValidUser = " ";
let InValidUser = " ";
let count1 = 0, count2 = 0;
const helper_1 = require("./helper");
exports.validateEmail = helper_1.default;
function validateUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let { traineeEmail, reviewerEmail } = users[i];
        if (helper_1.default(traineeEmail) && helper_1.default(reviewerEmail)) {
            ValidUser += "(" + traineeEmail + " , " + reviewerEmail + ") ";
            count1++;
        }
        else {
            InValidUser += "(" + traineeEmail + " , " + reviewerEmail + ") ";
            count2++;
        }
    }
    console.log("Count of Valid Users : ", count1);
    console.log("Valid users are : ", ValidUser);
    console.log("Count of Invalid users : ", count2);
    console.log("Invalid users are : ", InValidUser);
}
exports.default = validateUsers;
exports.validateUsers = validateUsers;
//# sourceMappingURL=validation.js.map