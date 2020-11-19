import React, { ReactNode } from "react";

import styles from "./styles/Header.module.css";

interface HeaderButtonProps {
    children?: ReactNode;
}

const HeaderButton = (props: HeaderButtonProps): JSX.Element => {
    return (
        <label className={styles.ButtonLabel}>
            <button className={styles.Button}>{props.children}</button>
            <div className={styles.ButtonUnderline} />
        </label>
    );
};

const Header = (): JSX.Element => {
    return (
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>Charlie Liu</span>
            <div className={styles.ButtonsContainer}>
                <HeaderButton>About</HeaderButton>
                <HeaderButton>Selected Works</HeaderButton>
                <HeaderButton>Contact</HeaderButton>
            </div>
        </div>
    );
};

export default Header;
