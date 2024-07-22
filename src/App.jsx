import Profile from './components/Profile/Profile'
import Friends from './components/Friends/Friends'
import TransactionHistory from './components/Transaction/Transaction'

import userData from './jsondata/userData.json'
import friendsData from './jsondata/friendsData.json'
import transactionData from './jsondata/transactionData.json'

import transactioncss from "./components/Transaction/Transaction.module.css";
import friendscss from "./components/Friends/Friends.module.css";


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


        <div className={friendscss.friendsList}>
          {
            friendsData.map(friendOne => {
              const color = friendOne.isOnline ? "green" : "red";
              return <Friends
                key={friendOne.name}
                color={color}
                avatar={friendOne.avatar}
                name={friendOne.name}
              />
            })
          }
        </div>


        <div>
          <table className={transactioncss.table}>
            <thead>
              <tr>
                <th className={transactioncss.th}>Type</th>
                <th className={transactioncss.th}>Amount</th>
                <th className={transactioncss.th}>Currency</th>
              </tr>
            </thead>

            <tbody>
              {
                transactionData.map(transactionOne => {
                  return <TransactionHistory
                    key={transactionOne.amount}
                    type={transactionOne.type}
                    amount={transactionOne.amount}
                    currency={transactionOne.currency}
                  />
                })
              }
            </tbody>
          </table>
        </div>

        
    </>
  )
}

export default App
