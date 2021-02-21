export class User {

    constructor(username, id) {
        this.username = username
        this.id = id
    }

    static fromJSON(userJSON) {
        return new User(
            userJSON.login,
            userJSON.id
        )
    }
}