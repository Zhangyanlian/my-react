
import "./index.scss";
import { Head } from "../../components/head";
import {Button,WhiteSpace} from "antd-mobile";
export class Mine extends Component{
    render(){
        return(
            <div>
                 <Head title="个人中心"></Head>
                <h2>这是个人中心</h2>
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }} >去登陆</Button><WhiteSpace />
            </div>
        )
    }
}