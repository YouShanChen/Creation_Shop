import { useSelector } from "react-redux";
import NavLink from '../NavLink';
import { theme,Drawer,Badge } from 'antd';
import styles from './navbar.module.css';
import { selectCartItems } from "../../redux/cartSlice";
import { selectCollectionItems } from "../../redux/collectionSlice";
export default function NavBar({ open, onClose }) {
    const {
        token: { colorNavItem },
      } = theme.useToken();   
    const cartItems = useSelector(selectCartItems);
    const cartcount = (cartItems.length > 0)
    ? cartItems.reduce((sum) => sum + 1, 0)
    : 0;
    const collectionItems = useSelector(selectCollectionItems);
    const collectioncount = (collectionItems.length > 0)
    ? collectionItems.reduce((sum) => sum + 1, 0)
    : 0;
    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            <style>{`
            .navItem { 
              color: ${colorNavItem}
            }
        `}
            </style>
            </NavLink>
            <Badge count={cartcount} color="#6366F2" style={{color: 'white'}}>
            <NavLink to="/Order"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                訂單
            </NavLink>
        </Badge>
        <Badge count={collectioncount} color="#6366F2" style={{color: 'white'}}>
            <NavLink to="/Collection"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                收藏
            </NavLink>
            </Badge>  
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
                style={{backgroundColor:"black"}}
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}