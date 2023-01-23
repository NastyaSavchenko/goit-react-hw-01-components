import styles from './TransactionHistory.module.css';

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
