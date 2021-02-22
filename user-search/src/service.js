import { User } from "./Domain/user"

export const getUsersFromGitHub = async (search) => {
    let users = []
    await fetch("https://api.github.com/search/users?q=" + search + "+in:login")
        .then(result => result.json())
        .then((items) => {
            users = items.items.map(user => User.fromJSON(user)).slice(0, 12)
        })
    return users
}

export const getUserFromGitHub = async (username) => {
    let user = new User()
    await fetch("https://api.github.com/users/" + username)
        .then(result => result.json())
        .then(item => { user = User.fromJSON(item) })
    return user
}

// Private Token: 9zXYGn_y4A5r9MP42xHx
export const getUsersFromGitLab = async (search) => {
    // The only way that I find for search users that contains the search parameter is searching by name and showing 
    // the username in the cards. Because i cant search the usernames that contains the parameter search.
    let users = []
    await fetch("https://gitlab.com/api/v4/users?search=" + search, {
        headers: {
            "PRIVATE-TOKEN": "9zXYGn_y4A5r9MP42xHx"
        }
    }).then(result => result.json())
        .then((items) => {
            users = items.map(user => User.fromJSON(user)).slice(0, 12)
        })
    return users
}

export const getUserFromGitLab = async (username) => {
    let user = new User()
    await fetch("https://gitlab.com/api/v4/users?username=" + username, {
        headers: {
            "PRIVATE-TOKEN": "9zXYGn_y4A5r9MP42xHx"
        }
    }).then(result => result.json())
        .then(items => { user = User.fromJSON(items[0]) })
    return user
}