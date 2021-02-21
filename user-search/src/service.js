export const getUsersFromGitHub = (search) => {
    fetch("https://api.github.com/search/users?q=" + search)
        .then(result => result.json())
        .then(items => console.log(items))
}