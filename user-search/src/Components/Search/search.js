import { React, useState } from "react"

import "./search.css"
import { getUsersFromGitHub, getUsersFromGitLab } from "../../service"
import { UserCard } from "../UserCard/usercard"

export const Search = (props) => {
    const [api, setApi] = useState("")
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        setApi(e.target.value)
    }

    const searchUsers = async () => {
        if (api == "github") {
            const response = await getUsersFromGitHub(search)
            setUsers(response)
        } else if (api == "gitlab") {
            const response = await getUsersFromGitLab(search)
            setUsers(response)
        } else {
            console.log("seleccione una api")
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
                {[...users].map((user) => <UserCard key={user.id} user={user}>{user.username}</UserCard>)}
            </div>
        </div>
    )
}