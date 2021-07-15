import {UserType} from '../HW8';

type DirectionType = 'up' | 'down';
type ActionsType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>;

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => {
                if (action.payload.direction === 'up') {
                    return a.name > b.name ? 1 : -1;
                }
                return a.name < b.name ? 1 : -1;
            })
        }
        case 'check': {
            return state.filter(u => u.age > action.payload.age);
        }
        default:
            return state
    }
}

export const sortAC = (direction: DirectionType) => ({type: 'sort', payload: {direction}} as const)
export const checkAC = (age: number) => ({type: 'check', payload: {age}} as const)