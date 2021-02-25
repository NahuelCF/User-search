import "./profile.css"

import { React, useContext, useEffect, useState } from 'react'
import { User } from "../../Domain/user"
import { getUserFromGitHub, getUserFromGitLab } from '../../service'

export const Profile = (props) => {
    const username = props.location.state.username
    const api = props.location.state.api
    const [user, setUser] = useState(new User())

    useEffect(() => {
        const getUser = async () => {
            let user
            if (api == "github") {
                user = await getUserFromGitHub(username)
            } else {
                user = await getUserFromGitLab(username)
            }
            setUser(user)
        }
        getUser()
    }, [])

    const apiIconTemplate = () => {
        if (api == "github") {
            return (
                <img style={{ height: "100px", width: "130px" }} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"></img>
            )
        } else {
            return (
                <img style={{ height: "100px", width: "100px" }} src="http://assets.stickpng.com/images/5847f997cef1014c0b5e48c1.png"></img>
            )
        }
    }

    return (
        <div className="profile-container">
            <div className="profile">
                <img className="user-avatar" src={user.avatar_url}></img>
                <h2>
                    {user.username}
                </h2>
                <h3>
                    ID: {user.id}
                </h3>
                <a href={user.profile_url} target="_blank" title="Click to go to profile">
                    {apiIconTemplate()}
                </a>
            </div>
        </div>
    )
}