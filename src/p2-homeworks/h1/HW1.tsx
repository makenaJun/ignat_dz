import React from 'react'
import {Message} from './Message';

const messageData = {
    avatar: 'https://i.pinimg.com/originals/18/72/9c/18729ceeea87af05b3bf62ca12c9ebe9.jpg',
    name: 'Artem',
    message: 'npm start прописывал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
