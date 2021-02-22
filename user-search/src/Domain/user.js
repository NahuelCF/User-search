export class User {

    constructor(username, id, avatar_url, profile_url) {
        this.username = username
        this.id = id
        this.avatar_url = avatar_url
        this.profile_url = profile_url
    }

    static fromJSON(userJSON) {
        return new User(
            userJSON.login || userJSON.username,
            userJSON.id,
            userJSON.avatar_url,
            userJSON.url || userJSON.web_url
        )
    }
}