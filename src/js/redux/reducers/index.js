


import { DECREMENT, CHANGECITY, CHANGEMSG } from "../actions";



//拆分 解决大型项目过于冗余 不利于维护的问题
import {combineReducers } from "redux";
import count from "./count";
import msg from "./msg";
import city from "./city";
import word from "./word";
import genre from "./genre";


export const reducers = combineReducers ({
    count:count,
    msg:msg,
    city:city,
    word:word,
    genre:genre
})







//未拆分整体部分
// const defaultState ={
//     count:1901,
//     msg:"wuhan1901 daydayup",
//     city:"最美火炉 -- 武汉"
// }


// export const reducers =(state = defaultState,action)=>{
//     console.log(action);
//     switch(action.type){

//         case "COUNTADD":
//             state.count ++;
//                 return {...state,...{count:state.count}};
//             break;
//         case "COUNTDES":
//             return {...state,...{count:--state.count}};
//             break;
//         case "increment":
//             return{...state,...{count:state.count + action.num}}
//             break;
//         case DECREMENT:
//             return{...state,...{count:state.count - action.num}}
//             break;


//         case CHANGECITY:
//             return{...state,...{city:action.city}};
//             break;
//         case CHANGEMSG:
//             return {...state,...{msg:action.msg}};
//             break;
//         default:
//             return state;
//             break;
//     }
// }