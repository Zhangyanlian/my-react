


import "./index.scss";

import {Route,Switch,Redirect} from "react-router-dom";
import {Home} from "../home";
import {Car} from "../car";
import {Good} from "../good";
import {Mine} from "../mine";
import { Foot } from "../../components/foot";
export class App extends Component{
    render(){
        return(
            <div>
                <Switch>

                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/car" component={Car}/>
                    <Route path="/app/good" component={Good}/>
                    <Route path="/app/mine" component={Mine}/>
                    <Route 
                        render={
                            ()=>(<Redirect to="/app/home"/>)
                        }
                    />
                </Switch>
                <Foot></Foot>
            </div>
        )
    }
}