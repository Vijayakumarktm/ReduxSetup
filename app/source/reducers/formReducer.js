import { SAVE_NAME } from "../actionType";

const initialState = {
    name: '',
    resourceList: []
};

export default function FormReducer(state = initialState, action) {
    switch(action.type) {

        case SAVE_NAME:
            return {
                ...state,
                resourceList : action.payload,
            };

        default : 
            return state;
                
            }
    }