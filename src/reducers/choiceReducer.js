import { types } from '../types/types';

const initialState = {
    isChoosen: false
}

export const  choiceReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.choiceStart:
            return {
                ...state,
                isChoosen: true
            }
        case types.choiceFinish:
            return {
                ...state,
                isChoosen: false
            }
        default:
            return state;
    }
}