import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

export const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={styles.wrapperItemData}>
            <span>{p.name}</span> <span>{p.age}</span>
        </div>
    ))

    const sortUpHandler = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDownHandler = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const checkHandler = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
        <div>
            <hr/>
            <div style={{padding: '10px'}}>
                homeworks 8

                <div className={styles.wrapperData}>{finalPeople}</div>

                <div className={styles.wrapperButton}>
                    <SuperButton onClick={sortUpHandler}>sort up</SuperButton>
                    <SuperButton onClick={sortDownHandler}>sort down</SuperButton>
                    <SuperButton onClick={checkHandler}>check 18</SuperButton>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default HW8
