

import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import { Guide } from "./guide";
import { App } from "./app";

export default class IndexView extends Component{
    render(){
        return(
           <Router>
               <div id="main">
                  <Route path="" component={Luyout}/>
               </div>
           </Router>
        )
    }
}

export class Luyout extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/guide" />)}/>
                <Route path="/guide" component={Guide}/>
                <Route path="/app" component={App}/>
            </Switch>
        )
    }
}