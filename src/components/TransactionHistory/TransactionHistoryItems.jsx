import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItems = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={styles.tbody}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItems;

TransactionHistoryItems.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
