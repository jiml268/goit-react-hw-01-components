import PropTypes from 'prop-types';
import css from './friend.module.css'
export default function Friends({friends}) {
 

  return (
    <div>
      <section className={css.friend_section}>
      <ul className={css.friend_list}>
                  
 {friends.map(friend => (
   <li className={css.item} key={friend.id}>

     {friend.isOnline
       ? <span className={css.friend_online}> {friend.isOnline}</span>
       : <span className={css.friend_offline}> {friend.isOnline}</span>}
     <img className={css.avatar}
            src={friend.avatar}
             alt="friend avatar"
             width="48"
         />
     <p className={css.name}> {friend.name}</p>


        </li>
      ))}
  </ul>     
</section>
        </div>
        );
}


Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
       id: PropTypes.number.isRequired,
    })
  ).isRequired,
}


