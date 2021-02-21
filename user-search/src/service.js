export const getUsersFromGitHub = (search) => {
    fetch("https://api.github.com/search/users?q=" + search + "+in:login")
        .then(result => result.json())
        .then(items => console.log(items))
}