import PropTypes from 'prop-types';
import css from './stats.module.css';

export default function Statistics({title, stats}) {
  return (
      <div>
          
      <section className={css.statistics}>
        <div className = {css.header}>
          <h2 className={css.title}>{title}</h2>
</div>
        <ul className={css.stat_list}>
                  
 {stats.map(stats => (
   <li className={css.stat_item} key={stats.id}>
     <span className={css.label}> {stats.label}</span>
     <span className={css.percentage}> {stats.percentage}%</span>

        </li>
      ))}
  </ul>
</section>
        </div>
       );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}