import { types } from '../types/types';

export const setStartChoosen = () => {
    return {
        type: types.choiceStart
    }
}

export const setFinishChoosen = () => {
    return{
        type: types.choiceFinish
    }
}