




import ReactDOM,{render} from "react-dom";
import { UiDemo } from "./view/uiDemo";
import {Provider} from "react-redux";
import store from "./store";
import { ConnectDemo } from "./view/connectDemo";



const hotRender = ()=>{
    render(
        <Provider store={store}>
            {/* <UiDemo/> */}
            <ConnectDemo/>
        </Provider>,
        document.getElementById("app")
    )
}

hotRender();