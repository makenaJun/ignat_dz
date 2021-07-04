import React, {ChangeEvent, FC} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: FC<GreetingPropsType> = (props) => {
    const {name, setNameCallback, addUser, error, totalUsers} = props;

    return (
        <div className={s.wrapper}>
            <span className={s.counter}>{totalUsers}</span>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                error={error}
            />
            <SuperButton onClick={addUser} className={s.button} disabled={!!error}>add</SuperButton>
        </div>
    )
}

export default Greeting
