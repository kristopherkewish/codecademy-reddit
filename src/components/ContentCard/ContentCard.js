import styles from './ContentCard.module.css';
import ContentInfo from '../ContentInfo/ContentInfo';
import Vote from '../Vote/Vote';
import TopComment from '../TopComment/TopComment';
import stock_image from '../../assets/images/stock_image.jpg'
import { NavLink } from 'react-router-dom';

export default function ContentCard({subreddit, datePosted, username, score, title, hasMedia, mediaUrl, url, selftext}) {
    return (
      <div className={styles.contentCard}>
        <ContentInfo 
          subreddit={subreddit}
          datePosted={datePosted}
          username={username}
          score={score}
        />
        <div className={styles.description}>
          <NavLink to="/card/0" className="navLink" style={{color: 'white', textDecoration: 'none'}}>
            <p className={styles.title}>{title}</p>
          </NavLink>
          <p className={styles.link}><a href={url} target="_blank">{url}</a></p>
        </div>
        <NavLink to="/card/0" className="navLink" style={{color: 'black', textDecoration: 'none', width: '100% .  '}}>
          {hasMedia ? <img src={mediaUrl} className={styles.media} /> : (selftext.length !== 0 ? <div className={styles.selftext}>{selftext}</div> : <div></div>)}
        </NavLink>
        <Vote />
        {/*
        Top comment data is not readily available from the raw front page data. Implement this as an additional feature later.
        <TopComment />
        */}
      </div>
    );
}