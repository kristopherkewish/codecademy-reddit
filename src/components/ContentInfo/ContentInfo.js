import styles from './ContentInfo.module.css';
import icon from '../../assets/images/icons/reddit.png';

export default function ContentInfo({subreddit, datePosted, username, score}) {
    return (
      <div className={styles.contentInfo}>
        <img src={icon} alt="subreddit logo" className={styles.icon} />
        <div className={styles.subreddit}>{subreddit}</div>
        <div className={styles.date}>{datePosted}</div>
        <div className={styles.username}>{username}</div>
        <div className={styles.votes}>{score}</div>
      </div>
    );
}