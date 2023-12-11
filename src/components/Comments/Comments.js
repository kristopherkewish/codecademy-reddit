import styles from './Comments.module.css';
import icon from '../../assets/images/icons/reddit.png';

export default function Comments() {
    return (
      <div className={styles.comments}>
        <div className={styles.commentContainer}>
            <img src={icon} alt="profile " className={styles.profilePic} />
            <div className={styles.username}>GreenJelly</div>
            <div className={styles.comment}>Wow! What a beautiful shot.</div>
        </div>
        <div className={styles.commentContainer}>
            <img src={icon} alt="profile " className={styles.profilePic} />
            <div className={styles.username}>PurpleRaspberry</div>
            <div className={styles.comment}>Stunning.</div>
        </div>
        <div className={styles.commentContainer}>
            <img src={icon} alt="profile " className={styles.profilePic} />
            <div className={styles.username}>BlueFerret</div>
            <div className={styles.comment}>I could have taken a better shot...</div>
        </div>
        <div className={styles.commentContainer}>
            <img src={icon} alt="profile " className={styles.profilePic} />
            <div className={styles.username}>RedRobot</div>
            <div className={styles.comment}>Subscribe to my millionaire seminar course FOR FREE.</div>
        </div>
      </div>
    );
}