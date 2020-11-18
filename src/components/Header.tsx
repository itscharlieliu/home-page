import React from "react";

import styles from "./styles/Header.module.css";

const Header = (): JSX.Element => {
    return (
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>Charlie Liu</span>
            <div className={styles.ButtonsContainer}>
                <button>test</button>
            </div>
        </div>
    );
};

export default Header;
