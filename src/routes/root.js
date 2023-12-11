import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from './root.module.css'

export default function Root() {
    return (
      <div className={styles.rootView}>
        <Header />
        <Outlet />
      </div>
    );
  }