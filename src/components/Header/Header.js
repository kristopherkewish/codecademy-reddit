import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/icons/reddit.png';
import styles from './Header.module.css';

export default function Header() {
    return (
      <div className={styles.header}>
        <NavLink to="/" className={styles.navLink}><img src={logo} alt="reddit logo" className={styles.logo}/></NavLink>
        <button className={styles.loginBtn}>Log In</button>
      </div>
    );  
}