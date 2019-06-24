


import { DECREMENT, CHANGECITY, CHANGEMSG,CHANGEMSGONE } from "../actions";


const defaultState = {
    genre:[],
    goods:[]
}
export default (state= defaultState,action)=>{
    switch(action.type){
      case "GETGENRE":
          return {...state,genre:action.genre};
          break;
        case "GETGOOD":
            return {...state,goods:action.goods};
            break;
        default:
            return state;
            break;
    }
}