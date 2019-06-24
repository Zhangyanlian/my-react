


import {connect} from "react-redux";
import { UiDemo } from "./uiDemo";
import { increment, countDesc, changeCity } from "../actions";

const mapStateToProps = (stata)=>{
    // console.log(stata);
    return{
        ...stata
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        add:()=>dispatch({type:"countAdd"}),
        increment:(num)=>dispatch(increment(num)),
        desc:num=>dispatch(countDesc(num)),
        changeCity:city=>dispatch(changeCity(city))
    }
}

export const ConnectDemo = connect(
    mapStateToProps,
    mapDispatchToProps 
)(UiDemo);