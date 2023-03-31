
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <Link to={`/Home`}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </Link>
            <Link to={`/Order`}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                訂單
            </Link>
            <Link to={`/Collection`}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                收藏
            </Link>   
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="Function" 
                placement="right" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}