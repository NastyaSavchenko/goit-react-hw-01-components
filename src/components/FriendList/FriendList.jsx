import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline} 
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number})),
}