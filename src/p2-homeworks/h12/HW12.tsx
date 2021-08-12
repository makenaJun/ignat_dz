import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {changeTheme, ThemeType} from './bll/themeReducer';

const themes: Array<ThemeType> = ['white', 'dark', 'red'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme);
    const dispatch = useDispatch();

    const onChangeCallback = (t: ThemeType) => {
        dispatch(changeTheme(t));
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <div style={{padding: '10px'}}>
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>
                <div>
                    <span className={s[theme + '-text']}>Change theme:</span>
                    <SuperSelect
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
                    />
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
