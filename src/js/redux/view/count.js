import { Button } from "antd-mobile";

import store from "../store";

//发送的 Action 必须从 ../actions 文件里面调取方法
import { countDes, increment, decrement, changeMsg ,changeMsgOne, chengeWord, getGenre, getGood} from "../actions";
import axios from "@/utils/axios";



export class CountDemo extends Component{
    change=()=>{
        console.log(this.refs.msg.value);
        store.dispatch(changeMsg(this.refs.msg.value));
    }
    getMsg=()=>{
        axios.get("/vue/user")
        .then(res=>{
            console.log(res.data.msg);
            // store.dispatch(changeMsgOne(res.data.msg));
            store.dispatch(changeMsgOne(res.data.msg))
        })
    }
    getGoods=()=>{
        store.dispatch(getGood({
            url:"/vue/goodlist",
            params:{
                limit:6 
            },
            cb:(res)=>{
                console.log(res);
            }
        }))
    }
    render(){
        console.log(this.props);
        const{
            state,
            changeSome,
            genre:{
                genre,
                goods
            }
        }=this.props;   
        console.log(goods); 
        return(
            <div>
                <h2>这是子组件</h2>
                <h2>count -- {state.count}</h2>
                <h2>msg -- {state.msg}</h2>
                <h2>city -- {state.city}</h2>
                <h2>word -- {state.word}</h2>
                <Button type="primary" inline size="small" onClick={()=>store.dispatch({type:"COUNTADD"})}>count add</Button>
                <Button type="warning" inline size="small" onClick={()=>store.dispatch(countDes)}>count des</Button>
                <Button type="primary" inline size="small" onClick={()=>store.dispatch(increment(40))}>count 40</Button>
                <Button type="warning" inline size="small" onClick={()=>store.dispatch(decrement(36))}>count 36</Button>
                <Button type="primary" inline size="small" onClick={()=>changeSome("四季如夏 -- 海南")}>changeCity</Button>
                <p><input type="text" placeholder="change- msg" ref="msg" onChange={this.change}/></p>

                <Button type="primary" inline size="small" onClick={this.getMsg}>getMsg</Button>
                <Button type="warning" inline size="small" onClick={()=>store.dispatch(chengeWord())}>setWord</Button>
                <Button type="primary" inline size="small" onClick={()=>store.dispatch(getGenre())}>getType</Button>
                <Button type="warning" inline size="small" onClick={this.getGoods}>带参数获取数据</Button>
                {
                    genre.map((g,i)=>{
                        return(
                            <div key={i}>
                              {g.text} -- {g.value} -- {i}
                            </div>
                        )
                    })
                }
              
                {
                    goods.map((gs,k)=>{
                        return(
                            <div key={k}>
                             商品编号：{gs.goodid} -- 商品名称：{gs.goodname}
                            </div>

                        )
                    })
                }
           </div>
        )
    }
}