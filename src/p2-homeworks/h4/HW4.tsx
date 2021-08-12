import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Field is required'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(!checked)

    return (
        <div>
            <hr/>
            <div style={{padding: '10px'}}>
                homeworks 4

                <div className={s.column}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                    />

                    <SuperInputText
                        className={s.blue} // проверьте, рабоет ли смешивание классов
                    />

                    {/*----------------------------------------------------*/}

                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton
                        red
                        onClick={showAlert}
                    >
                        delete
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>

                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                    <SuperCheckbox checked={checked} onChange={testOnChange}/>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default HW4
