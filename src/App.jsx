import Profile from './components/Profile/Profile'
import FriendList from './components/Friends/FriendList'
import FriendListItem from './components/Friends/FriendListItem'
import TransactionHistory from './components/Transaction/TransactionHistory'

import userData from './jsondata/userData.json'
import friendsData from './jsondata/friendsData.json'
import transactionData from './jsondata/transactionData.json'


function App() {
  return (
    <>
        <Profile 
          avatar={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          followers={userData.stats.followers}
          views={userData.stats.views}
          likes={userData.stats.likes}
        />

        <FriendList>
          {
            friendsData.map(friendOne => {
              const color = friendOne.isOnline ? "green" : "red";
              return (
                <FriendListItem
                  key={friendOne.id}
                  color={color}
                  avatar={friendOne.avatar}
                  name={friendOne.name}
                  isOnline={friendOne.isOnline}
                  />
                );
            })
          }
          </FriendList>
        

        <TransactionHistory items={transactionData} />

        
    </>
  )
}

export default App
