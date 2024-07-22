import friendscss from "./FriendListItem.module.css";

const FriendList = ({children}) => {
    return <div className={friendscss.friendsList}>{children}</div>
}

export default FriendList