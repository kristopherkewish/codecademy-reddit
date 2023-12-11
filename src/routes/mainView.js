import ContentCard from '../components/ContentCard/ContentCard';
import styles from './mainView.module.css';

export default function MainView() {
    return (
      <div className={styles.mainView}>
        <ContentCard />
      </div>
    );
}