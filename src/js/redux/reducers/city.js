
import { DECREMENT, CHANGECITY, CHANGEMSG } from "../actions";

export default (state = ["最美火炉 -- 武汉"],action)=>{
    switch(action.type){
        case CHANGECITY:
             return[action.city];
             break;
        default:
            return state;
             break;
    }
}