

import { DECREMENT, CHANGECITY, CHANGEMSG,CHANGEMSGONE } from "../actions";


const defaultState = ["wuhan1901 daydayup"];
export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGEMSG:
                return action.msg;
                break;
        case CHANGEMSGONE:
            return action.msg;
            break;
         default:
                return state;
                break;
    }
}