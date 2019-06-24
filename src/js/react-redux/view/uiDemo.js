
import {Button} from "antd-mobile";




export class UiDemo extends Component{
    render(){
        // console.log(this.props);
        const{
            count,
            city,
            add,
            increment,
            desc,
            changeCity
        }=this.props;
        return(
            <div>
                <h2>  ui 组建</h2>
                <h2>利用 connect 生成容器组建</h2>
                <h2> count -- {count}</h2>
                <h2> city -- {city}</h2>
                <Button type="primary" inline size="small" onClick={add}>count add</Button>
                <Button type="warning" inline size="small" onClick={()=>increment(60)}>count 累加60</Button>
                <Button type="primary" inline size="small" onClick={()=>desc(75)}>count 累减75</Button>
                <Button type="warning" inline size="small" onClick={()=>changeCity("国际大都市 -- 上海")}>go 上海</Button>
            </div>
        )
    }
}