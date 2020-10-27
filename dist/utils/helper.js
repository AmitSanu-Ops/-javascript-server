"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    let emailcheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return emailcheck.test(email);
}
exports.default = validateEmail;
//# sourceMappingURL=helper.js.map