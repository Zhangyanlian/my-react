

import ReactDOM,{render} from "react-dom";
import IndexView from "./view";

const rootEle = document.getElementById("app");
 

const hotRender = () =>{
    render(
        // <IndexView/>,
        // <CPD/>,
        rootEle
    )
}
// import {ReduxDemo} from "./redux";
// import "./redux";

// hotRender(ReduxDemo);

// hotRender()

//  import "./flux";

import "./react-redux";
