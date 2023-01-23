import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsInfo = [
    { label: 'Followers', quantity: stats.followers },
    { label: 'Views', quantity: stats.views },
    { label: 'Likes', quantity: stats.likes },
  ];

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {statsInfo.map(el => {
          return (
            <li key={el.label}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.quantity}>{el.quantity}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
