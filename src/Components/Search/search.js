import { React, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import "./search.css"
import { getUsersFromGitHub, getUsersFromGitLab } from "../../service"
import { UserCard } from "../UserCard/usercard"

export const Search = (props) => {
    const [api, setApi] = useState("")
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState("")

    const MySwal = withReactContent(Swal)

    const alert = (icon, title, text) => {
        MySwal.fire({
            icon: icon,
            title: title,
            text: text
        })
    }

    const handleChange = (e) => {
        setApi(e.target.value)
    }

    const getUserFromAPI = async (apiName) => {
        let users
        if (apiName == "github") {
            users = await getUsersFromGitHub(search)
        } else {
            users = await getUsersFromGitLab(search)
        }
        return users
    }

    const searchUsers = async () => {
        if (search.length == 0) {
            alert("info", "There is no user to seach", "Write an username before search")
        } else {
            if (api.length == 0) {
                alert("info", "Oops", "Choose an API before search")
            } else {
                setLoader(<div className="loader"></div>)
                const users = await getUserFromAPI(api)
                setUsers(users)
                setLoader("")
            }
        }
    }

    return (
        <div>
            <div className="search-container">
                <div className="title-container">
                    USER SEARCH
                </div>
                <div className="search-inputs">
                    <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <select onChange={handleChange}>
                        <option selected disabled>API</option>
                        <option value="github">GitHub</option>
                        <option value="gitlab">GitLab</option>
                    </select>
                    <button onClick={searchUsers}>Search</button>
                </div>
            </div>
            <div className="results-container">
                <div className="loader-container">
                    {loader}
                </div>
                {[...users].map((user) => <UserCard key={user.id} user={user} history={props.history} api={api} />)}
            </div>
        </div>
    )
}