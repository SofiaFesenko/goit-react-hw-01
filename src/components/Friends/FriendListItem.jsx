import friendscss from "./FriendListItem.module.css";

const FriendListItem = props => {  
    return (
      <div className={friendscss.friend}>
        <img src={props.avatar} className={friendscss.friendAvatar}/>
        <p>{props.name}</p>
        <span className="isOnlineCheck" style={{color: props.color}}>{props.isOnline ? "Online" : "Offline"}</span>
      </div>
  )
}

export default FriendListItem