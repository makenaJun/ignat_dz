import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import dateFormat from 'dateformat';
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = date.toTimeString().slice(0, 8) // fix with date
    const stringDate = dateFormat(date, 'dd.mm.yyyy') // fix with date


    return (
        <div className={styles.wrappBlock}>
            <div className={styles.timeBlock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={styles.dateBlock}>
                {show && stringDate}
            </div>

            <div className={styles.buttonBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
