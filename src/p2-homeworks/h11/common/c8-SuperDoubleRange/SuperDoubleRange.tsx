import React from 'react'
import {TwoThumbInputRange} from 'react-two-thumb-input-range';
import styles from './SuperDoubleRange.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min?: number
    max?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min = 0, max = 100
        // min, max, step, disable, ...
    }
) => {

    const thumbStyle: React.CSSProperties = {
        width: '15px',
        appearance: 'none',
        height: '15px',
        cursor: 'pointer',
        backgroundColor: '#005087',
        borderRadius: ' 4px',
    }

    const inputStyle: React.CSSProperties = {
        width: '150px',
        height: '15px',
        borderRadius: '4px',
        border: '1px solid #767676'
    }

    return (<div className={styles.wrapper}>
            <TwoThumbInputRange onChange={onChangeRange}
                                min={min}
                                max={max}
                                values={value}
                                showLabels={false}
                                railColor={'#ccc'}
                                inputStyle={inputStyle}
                                thumbStyle={thumbStyle}
                                trackColor={'#008aff'}
            />
        </div>
    )
}

export default SuperDoubleRange
