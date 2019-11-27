import { SAVE_NAME } from "../actionType";

const initialState = {
    name: '',
};

export default function FormReducer(state = initialState, action) {
    switch(action.type) {

        case SAVE_NAME:
            return {
                ...state,
                name : action.payload,
            };

        default : 
            return state;
                
            }
    }