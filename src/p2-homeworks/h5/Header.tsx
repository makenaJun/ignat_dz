import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import styles from './Header.module.css';
import {Transition} from 'react-transition-group';



function Header() {
    const [displayMenu, setDisplayMenu] = useState(false);


    return (
        <div className={styles.wrapper}
             onMouseEnter={() => setDisplayMenu(true)}
             onMouseLeave={() => setDisplayMenu(false)}>

            <div className={`${styles.displayMenu}  ${displayMenu ? styles.display : ''}`}/>

            <Transition
            in={displayMenu}
            timeout={500}
            mountOnEnter
            unmountOnExit
            >
                {state =>
                <div className={`${styles.navMenu} ${styles[state]}`}>
                    <NavLink to={PATH.PRE_JUNIOR}
                             activeClassName={styles.active}
                             className={styles.link}>Pre-Junior
                    </NavLink>

                    <NavLink to={PATH.JUNIOR}
                             activeClassName={styles.active}
                             className={styles.link}>Junior
                    </NavLink>

                    <NavLink to={PATH.JUNIOR_PLUS}
                             activeClassName={styles.active}
                             className={styles.link}>JuniorPlus
                    </NavLink>
                </div>}
            </Transition>

        </div>
    )
}

export default Header;
