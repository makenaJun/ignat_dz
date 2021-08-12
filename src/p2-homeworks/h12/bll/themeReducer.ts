export enum ACTIONS_TYPE {
    CHANGE_THEME = 'HOMEWORKS/HW12/CHANGE_THEME',
}

export type ThemeType = 'white' | 'dark' | 'red';

export type StateType = typeof initialState;

const initialState = {
    theme: 'white' as ThemeType,
};

type ActionTypes = ReturnType<typeof changeTheme>;

export const themeReducer = (state: StateType = initialState, action: ActionTypes): StateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_THEME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
};

export const changeTheme = (theme: ThemeType) => ({type: ACTIONS_TYPE.CHANGE_THEME, payload: {theme}});