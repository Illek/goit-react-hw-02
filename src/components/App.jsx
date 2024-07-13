import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Profile user={userData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </main>
    </div>
  );
};

export default App;
