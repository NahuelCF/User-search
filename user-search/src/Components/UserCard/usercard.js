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
            <div className="usercard-inner">
                <div className="usercard-front">
                    <div>Username: {user.username}</div>
                    <div>ID: {user.id}</div>
                </div>
                <div className="usercard-back">
                    Click to see {user.username}'s profile
                </div>
            </div>
        </div>
    )
}