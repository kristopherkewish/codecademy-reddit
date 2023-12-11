import styles from './ContentInfo.module.css';
import icon from '../../assets/images/icons/reddit.png';

export default function ContentInfo() {
    return (
      <div className={styles.contentInfo}>
        <img src={icon} alt="subreddit logo" className={styles.icon} />
        <div className={styles.subreddit}>r/subreddit</div>
        <div className={styles.date}>12/12/23</div>
        <div className={styles.username}>username</div>
        <div className={styles.votes}>12.3k</div>
      </div>
    );
}