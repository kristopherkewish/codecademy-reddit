import styles from './detailedView.module.css';
import ContentInfo from '../components/ContentInfo/ContentInfo';
import Vote from '../components/Vote/Vote';
import Comments from '../components/Comments/Comments';
import stock_image from '../assets/images/stock_image.jpg'


export default function DetailedView() {
    return (
      <div className="detailedView">
        <ContentInfo />
        <div className={styles.description}>A view of the mountains</div>
        <img src={stock_image} className={styles.media} alt="mountain view"/>
        <Vote />
        <Comments />
      </div>
    );
  }