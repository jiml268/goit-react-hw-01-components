import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data' 
import FriendList from './friendList/FriendList'
import friends from './friendList/friends'
import Transaction from './transaction/Transaction';
import transactions from './transaction/transactions';



export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <Transaction items = {transactions} />
    </div>
  );
};
