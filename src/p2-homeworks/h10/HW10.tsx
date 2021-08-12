import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import Loader from './Loader/Loader';

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const [timeoutId, setTimeoutId] = useState<number>(0)

    const setLoading = () => {
        clearTimeout(timeoutId);
        dispatch(loadingAC(true));
        const id: number = window.setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        setTimeoutId(id);
    };
    console.log(loading)

    return (
        <div>
            <hr/>
            <div style={{padding: '10px'}}>
                homeworks 10
                {loading ? <Loader/> : <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
                }
            </div>

            <hr/>
        </div>
    )
}

export default HW10;
