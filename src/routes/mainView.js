import ContentCard from '../components/ContentCard/ContentCard';
import styles from './mainView.module.css';

export default function MainView({cardData}) {
  const contentCards = cardData.map((card,index) => {
    return (
      <ContentCard 
        key={index}
        subreddit={card.subreddit}
        datePosted={card.datePosted}
        username={card.username}
        score={card.score}
        title={card.title}
        hasMedia={card.hasMedia}
        mediaUrl={card.mediaUrl}
        url={card.url}
        selftext={card.selftext}
      />
      );
  });

  return (
    <div className={styles.mainView}>
      {contentCards}
    </div>
  );
}