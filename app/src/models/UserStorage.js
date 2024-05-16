"use strict";

class UserStorage {
    static #users = {
        id : ['kty8600'],
        psword : ['1234'],
        name: ["김태윤"],
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        return newUsers;
    }
}

module.exports = UserStorage;