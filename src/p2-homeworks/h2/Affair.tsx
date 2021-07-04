import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const { priority } = props.affair;
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};
    const complexityAffairStyle = {
        backgroundColor: priority === 'low'? 'green' :
            priority === 'middle'? 'orange' :
                priority === 'high'? 'red' : '',
        color: '#fff',
        padding: '0 5px',
        display: "inline",
        borderRadius: '4px',
        opacity: '0.7',
        fontSize: '10px'
    }

    return (
        <div>
            <SuperButton red onClick={deleteCallback} className={styles.deleteButton}>x</SuperButton>
            {props.affair.name} <div style={complexityAffairStyle}>{props.affair.priority.slice(0, 1).toUpperCase()}</div>
        </div>
    )
}

export default Affair
