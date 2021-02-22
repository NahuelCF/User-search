import "./usercard.css"

export const UserCard = (props) => {
    const user = props.user
    const api = props.api

    const goToProfile = () => {
        props.history.push({
            pathname: "/userProfile",
            state: { username: user.username, api: props.api }
        })
    }

    return (
        <div className="usercard" onClick={goToProfile}>
            <div>Username: {user.username}</div>
            <div>ID: {user.id}</div>
        </div>
    )
}