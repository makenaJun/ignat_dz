import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['Cat', 'Dog', 'Elephant']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])
    return (
        <div>
            <hr/>
            <div style={{padding: '10px'}}>
                homeworks 7

                <div style={{'marginLeft': '20px'}}>
                    <div>
                        <SuperSelect
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                    <div>
                        <SuperRadio
                            name={'radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default HW7
