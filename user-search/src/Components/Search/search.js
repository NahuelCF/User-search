import { React, useContext, useEffect, useRef, useState } from "react"

import "./search.css"

export const Search = (props) => {
    const [api, setApi] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
        setApi(e.target.value)
    }

    return (
        <div>
            <div className="search-container">
                <div className="title-container">
                    USER SEARCH
                </div>
                <div className="search-inputs">
                    <input></input>
                    <select name="API" onChange={handleChange}>
                        <option selected disabled>API</option>
                        <option value="github">GitHub</option>
                        <option value="gitlab">GitLab</option>
                    </select>
                    <button>Search</button>
                </div>
            </div>
            <div>Resultados</div>
        </div>
    )
}