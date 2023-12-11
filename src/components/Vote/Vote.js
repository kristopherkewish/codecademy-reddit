import styles from './Vote.module.css';

export default function Vote() {
    return (
      <div className={styles.vote}>
        <button className={styles.voteBtn}>↑</button>
        <button className={styles.voteBtn}>↓</button>
      </div>
    );
}