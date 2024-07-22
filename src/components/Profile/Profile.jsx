import usercss from "./Profile.module.css";

const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <div className={usercss.profile}>
            <div className={usercss.userinfoblock}>
                <img src={avatar} className={usercss.userpic}/>
                <b><p className={usercss.userinfo}>{username}</p></b>
                <p className={usercss.userinfo}>@{tag}</p>
                <p className={usercss.userinfo}>{location}</p>
            </div>

            <div className={usercss.profileinfo}>
                <span className={usercss.stats}>
                    Followers
                    <br/>
                    <b>{followers}</b>
                </span>
                <span className={usercss.stats}>
                    Views
                    <br/>
                    <b>{views}</b>
                </span>
                <span className={usercss.stats}>
                    Likes
                    <br/>
                    <b>{likes}</b>
                </span>
            </div>

        </div>
    )
    
}

export default Profile