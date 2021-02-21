import { React, useState } from "react"

import "./search.css"
import { getUsersFromGitHub } from "../../service"

export const Search = (props) => {
    const [api, setApi] = useState("")
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value)
        setApi(e.target.value)
    }

    const searchUsers = async () => {
        if (api == "github") {
            const response = await getUsersFromGitHub(search)
            setUsers(response)
        } else if (api == "gitlab") {
            console.log("gitlab")
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
            <div>
                {[...users].map((user) => <div key={user.id}>{user.username}</div>)}
            </div>
        </div>
    )
}