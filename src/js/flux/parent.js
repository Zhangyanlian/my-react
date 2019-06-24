
import {Child} from "./child"
import { store } from "./store";
export class Parent extends Component{
    state = {
        items:store.getItems()
    }

    render(){
        return  (
            <div>
                <h2> parent  -  parent  </h2>
                {
                    this.state.items.map((item,i)=>{
                        return (
                            <h2 key={i}> {item } -- {i}</h2>
                        )
                    })
                }
                <hr/>
                <Child/>
            </div>
        )
    }
}