import PropTypes from 'prop-types';
import css from './trans.module.css'

export default function Transaction({items}) {
  

  return (
    <div>
      <section className={css.transaction_section}></section>
      <table className={css.transaction_history}>
        <thead className={css.transaction_head}>
    <tr >
            <th className={css.transaction_text}>Type</th>
      <th className={css.transaction_text}>Amount</th>
      <th className={css.transaction_text}>Currency</th>
    </tr>
  </thead>
<tbody>


      {items.map(trans => (
      <tr className={css.transaction_row} key={trans.id}>
      <td className={css.transaction_column}>{trans.type}</td>
      <td className={css.transaction_column}>{trans.amount}</td>
      <td className={css.transaction_column}>{trans.currency}</td>
    </tr> 
     ))}
 </tbody>
</table>
        </div>
        );
}



Transaction.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}