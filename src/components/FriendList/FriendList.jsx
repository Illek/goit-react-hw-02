import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.homieList}>
      {friends.map((maHomie) => (
        <li className={s.homieListItem} key={maHomie.id}>
          <FriendListItem
            avatar={maHomie.avatar}
            name={maHomie.name}
            isOnline={maHomie.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
