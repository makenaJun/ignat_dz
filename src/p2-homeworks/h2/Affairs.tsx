import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    };
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('middle')
    };
    const setLow = () => {
        props.setFilter('low')
    };

    const setClassName = (filter: FilterType) => {
        return `${styles.button} ${props.filter === filter ? styles.active : ''}`
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonsWrapper}>
                <SuperButton onClick={setAll} className={setClassName('all')}>All</SuperButton>
                <SuperButton onClick={setHigh} className={setClassName('high')}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={setClassName('middle')}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={setClassName('low')}>Low</SuperButton>
            </div>
            {mappedAffairs}
        </div>
    )
}

export default Affairs
