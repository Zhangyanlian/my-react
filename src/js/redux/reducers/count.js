


import { DECREMENT, CHANGECITY, CHANGEMSG } from "../actions";


const defaultState = 1901;
export default (state=defaultState,action)=>{
    switch(action.type){
        case "COUNTADD":
                state ++;
                    return state;
                break;
            case "COUNTDES":
                state --;
                return state;
                break;
            case "increment":
                return state += action.num;
                break;
            case DECREMENT:
                return state -= action.num;
                break;
            default:
                return state;
                break;
    }
}