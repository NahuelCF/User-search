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
                console.log(user)
            }
            setUser(user)
        }
        getUser()
    }, [])

    return (
        <div>
            UserProfile {user.id}
            <img src={user.avatar_url}></img>
        </div>
    )
}