import React from "react";
import friends from "./json/friends.json";
import user from "./json/user.json";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./json/statistic.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./json/transactions.json";

export default function App() {
  return (
    <>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
}
