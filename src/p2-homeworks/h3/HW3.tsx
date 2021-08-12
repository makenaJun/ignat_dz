import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const newUser: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([...users, newUser])
    }

    return (
        <div>
            <hr/>
            <div style={{padding: '10px'}}>
                homeworks 3

                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>

            <hr/>
        </div>
    )
}

export default HW3
