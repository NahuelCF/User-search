import { React, useContext, useEffect, useRef, useState } from "react"

import "./search.css"
import { getUsersFromGitHub } from "../../service"

export const Search = (props) => {
    const [api, setApi] = useState("")
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
        setApi(e.target.value)
    }

    const searchUsers = () => {
        if (api == "github") {
            getUsersFromGitHub(search)
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
                    <select name="API" onChange={handleChange}>
                        <option selected disabled>API</option>
                        <option value="github">GitHub</option>
                        <option value="gitlab">GitLab</option>
                    </select>
                    <button onClick={searchUsers}>Search</button>
                </div>
            </div>
            <div>Resultados</div>
        </div>
    )
}