import styles from './TopComment.module.css';
import icon from '../../assets/images/icons/reddit.png';

export default function TopComment() {
    return (
      <div className={styles.topComment}>
        <img src={icon} alt="profile picture" className={styles.profilePic} />
        <div className={styles.username}>GreenJelly</div>
        <div className={styles.comment}>Wow! What a beautiful shot.</div>
      </div>
    );
}