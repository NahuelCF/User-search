import "./usercard.css"

export const UserCard = (props) => {
    const user = props.user

    return (
        <div className="usercard">
            <div>Username: {user.username}</div>
            <div>ID: {user.id}</div>
        </div>
    )
}