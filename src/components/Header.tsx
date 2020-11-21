import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles/Header.module.css";

interface HeaderButtonProps {
    children?: ReactNode;
    active?: boolean;
}

const HeaderButton = (props: HeaderButtonProps): JSX.Element => {
    return (
        <label className={props.active ? styles.ButtonLabelActive : styles.ButtonLabel}>
            <button className={styles.Button}>{props.children}</button>
            <div className={styles.ButtonUnderline} />
        </label>
    );
};

const Header = (): JSX.Element => {
    const history = useHistory();

    console.log(history);

    return (
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>Charlie Liu</span>
            <div className={styles.ButtonsContainer}>
                <HeaderButton>About</HeaderButton>
                <HeaderButton active>Selected Works</HeaderButton>
                <HeaderButton>Contact</HeaderButton>
            </div>
        </div>
    );
};

export default Header;
