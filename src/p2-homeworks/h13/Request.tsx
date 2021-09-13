import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {authApi, BodyCheckRequest} from './api/request-api';


function Request() {
    const [checked, setChecked] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('');

    const onClickHandler = () => {
        const body: BodyCheckRequest = {
            success: checked
        }
        authApi.check(body)
            .then(res => setResponse(res.data.errorText))
            .catch((error) => setResponse(error.response ? error.response.data.errorText : error.message));

    }

    return (
        <div>
            <SuperButton onClick={onClickHandler}>Send</SuperButton>
            <SuperCheckbox checked={checked}
                           onChangeChecked={setChecked}/>
            <div>{response}</div>
        </div>
    );
}

export default Request;