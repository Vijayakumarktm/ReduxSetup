import { SAVE_NAME } from "../actionType";


export const saveNameByAction = (name) => {
    console.log('saveNameByAction: ',name);
    return {
        type: SAVE_NAME, 
        payload: name,
    };
};

