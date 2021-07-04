import React from 'react'
import styles from './Error404.module.css';

function Error404() {
    return (
        <div className={styles.errorWrapper}>
            <div className={styles.errorCode}>404</div>
            <div className={styles.errorMessage}>Page not found!</div>
        </div>
    )
}

export default Error404
