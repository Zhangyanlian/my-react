
import "./index.scss";
import { Head } from "../../components/head";

export class Home extends Component{
    render(){
        return(
            <div>
                <Head title="首页"></Head>
                <h2>这是 home 视图</h2>
            </div>
        )
    }
}