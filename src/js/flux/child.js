

import {Button} from "antd-mobile"
import { addNewItem, descNewItem } from "./actions";
export class Child extends Component{

    // change(){
    //     console.log("view  001 click");
    //     addNewItem("uni-app")
    // }

    render(){
        return  (
            <div>
                <h2> Child  -  Child  </h2>
                <Button type="warning" inline > New Item </Button>
                <Button type="primary" inline> New Item desc</Button>
            </div>
        )
    }
}