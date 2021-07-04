import React, {useState, FC, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: FC<GreetingContainerPropsType> = (props) => {
    const {users, addUserCallback} = props;
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
        setError('');
    }
    const addUser = () => {
        const trimmedName = name.trim();
        if(!trimmedName.length){
            setError('Field is required');
        }else {
            addUserCallback(trimmedName)
            alert(`Hello  ${trimmedName}!`)
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
