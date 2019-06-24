
import store from "./store";
import {CountDemo} from "./view/count";
import ReactDom ,{render} from "react-dom";
import { changeCity } from "./actions";


export class ReduxDemo extends Component{
    render(){
        const state = store.getState();
        return(
            <div>
                <h2>redux  --- 案例</h2>
                <CountDemo
                state = {state}
                changeSome = {(city)=>store.dispatch(changeCity(city))}
                genre={state.genre}
                ></CountDemo>
            </div>
        )
    }
}



const hotRender = ()=>{
    ReactDom.render(
        <ReduxDemo></ReduxDemo>,
        document.getElementById("app")
    )
}
hotRender();

store.subscribe(hotRender);