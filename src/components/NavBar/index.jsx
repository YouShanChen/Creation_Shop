import NavLink from '../NavLink';
import { Drawer } from 'antd';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            <NavLink to="/Category"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                訂單
            </NavLink>
            <NavLink to="/Collection"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                收藏
            </NavLink>
               
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="Creation Shop" 
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