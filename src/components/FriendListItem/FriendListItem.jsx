import s from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name = "Guest", isOnline }) => {
  return (
    <div className={s.homieCard}>
      <img className={s.homieAvatar} src={avatar} alt={name} width="48" />
      <p className={s.homieName}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline, s.status)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
