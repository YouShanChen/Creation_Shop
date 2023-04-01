import { useState } from "react";
import styles from "./header.module.css";
import NavBar from "../NavBar";
import HamburgerMenu from "../HamburgerMenu";

export default function Header({ title }) {

    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>
                    {title}
                </h1>
                
                <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />

            </div>
            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
        </div>

    );
}