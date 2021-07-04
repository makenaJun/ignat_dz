import React, {FC} from 'react'
import styles from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: FC<PropsType> = (props) => {
    const {avatar, message, name, time} = props;
    return (
        <div className={styles.wrapperMessage}>
            <div className={styles.avatar}><img src={avatar} alt="Avatar"/></div>
            <div className={styles.corner}/>
            <div className={styles.bodyMessage}>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.text}>{message}</div>
                </div>
                <div className={styles.messageTime}>{time}</div>
            </div>


        </div>
    )
}
