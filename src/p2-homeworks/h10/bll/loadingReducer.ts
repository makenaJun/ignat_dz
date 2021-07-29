export enum ACTIONS_TYPE {
    SET_LOADING = 'HOMEWORKS/HW10/SET_LOADING',
};

export type StateType = typeof initialState;

const initialState = {
    loading: false,
};

type ActionTypes = ReturnType<typeof loadingAC>;

export const loadingReducer = (state: StateType = initialState, action: ActionTypes): StateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.SET_LOADING: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
};

export const loadingAC = (loading: boolean) => ({type: ACTIONS_TYPE.SET_LOADING, payload: {loading}});
// fix any