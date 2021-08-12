import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import styles from './HW11.module.css';


function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeHandler = (values: [number, number]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.rangeBlock} style={{marginLeft: '55px'}}>
                <SuperRange onChangeRange={setValue1} value={value1}/>
                <span className={styles.labelBlock}>{value1}</span>
            </div>

            <div className={styles.rangeBlock}>
                <span className={styles.labelBlock}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeHandler}
                    value={[value1, value2]}
                />
                <span className={styles.labelBlock}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
