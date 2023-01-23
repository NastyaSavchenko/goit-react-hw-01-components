import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{status}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
