import React from "react";

import styles from "./styles/Header.module.css";

const Header = (): JSX.Element => {
    return (
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>Charlie Liu</span>
            <div className={styles.ButtonsContainer}>
                <button className={styles.Button}>About</button>
                <button className={styles.Button}>Selected Works</button>
                <button className={styles.Button}>Contact</button>
            </div>
        </div>
    );
};

export default Header;
