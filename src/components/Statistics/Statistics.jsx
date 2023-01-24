import styles from './Statistics.module.css';
import { BgcItem } from './Statistics.styled.jsx';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && (<h2 className={styles.title}>{title}</h2>)}

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <BgcItem key={el.id} lable={el.label.slice(1)}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}</span>
            </BgcItem>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, percentage: PropTypes.number})),
};
