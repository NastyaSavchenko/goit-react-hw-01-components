import styles from './FriendList.module.css';
import { OnlineStatus } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      <OnlineStatus status={status} />
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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
