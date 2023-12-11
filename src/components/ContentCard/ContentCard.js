import styles from './ContentCard.module.css';
import ContentInfo from '../ContentInfo/ContentInfo';
import Vote from '../Vote/Vote';
import TopComment from '../TopComment/TopComment';
import stock_image from '../../assets/images/stock_image.jpg'
import { Link } from 'react-router-dom';

export default function ContentCard() {
    return (
      <div className={styles.contentCard}>
        <ContentInfo />
        <div className={styles.description}>A view of the mountains</div>
        <Link to="/card/0"><img src={stock_image} className={styles.media} /></Link>
        <Vote />
        <TopComment />
      </div>
    );
}