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