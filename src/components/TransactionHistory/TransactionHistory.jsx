import s from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(s.border, s.tablet)}>
      <thead>
        <tr className={clsx(s.valuesTitle)}>
          <th className={clsx(s.headCell, s.border)}>Type</th>
          <th className={clsx(s.headCell, s.border)}>Amount</th>
          <th className={clsx(s.headCell, s.border)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((i) => (
          <tr className={s.transactionValue} key={i.id}>
            <td className={clsx(s.cellText, s.cell)}>{i.type}</td>
            <td className={clsx(s.cellText, s.cell)}>{i.amount}</td>
            <td className={clsx(s.cellText, s.cell)}>{i.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

// */const FriendList = ({ friends }) => {
// *  return (
// *    <ul className={s.homieList}>
// ?      {friends.map((maHomie) => (
// ?        <li className={s.homieListItem} key={maHomie.id}>
// ?          <FriendListItem
// ?            avatar={maHomie.avatar}
// ?            name={maHomie.name}
// ?            isOnline={maHomie.isOnline}
// ?          />
// ?        </li>
// ?      ))}
// *    </ul>
// *  );
// *};
