


const defaultstate = {
    count : 1314,
    city : "湖北"
}


export const reducers=(state=defaultstate,action) =>{
    switch(action.type){
        case "countAdd":
            return {...state,count:++state.count};
            break;
        case "increment":
            return {...state,count: state.count + action.num};
            break;
        case "countDesc":
            return {...state,count:state.count - action.num};
            break;
        case "changeCity":
            return {...state,city:action.city};
            break;
        default:
            return state;
            break;
    }
}