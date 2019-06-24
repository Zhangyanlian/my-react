


import { DECREMENT, CHANGECITY, CHANGEMSG,CHANGEMSGONE } from "../actions";


const defaultState = "武汉天天下雨，天天看海"
export default (state= defaultState,action)=>{
    switch(action.type){
        case "CHANGEWORD":
            return action.word;
            break;
        default:
            return state;
            break;
    }
}