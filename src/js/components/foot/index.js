


import "./index.scss";

export const foots=[
    {text:"首页",path:"/app/home",name:"home",icon:"icon-home"},
    {text:"商品列表",path:"/app/good",name:"good",icon:"icon-goodsfill"},
    {text:"购物车",path:"/app/car",name:"car",icon:"icon-shop_car"},
    {text:"个人中心",path:"/app/mine",name:"mine",icon:"icon-minefill"},
]


import {NavLink} from "react-router-dom";
import { List, Badge } from 'antd-mobile';

export class Foot extends Component{
    render(){
        return(
            <footer>
                {
                  foots.map((item,i)=>{
                      return(
                          <div key={i}>
                              <NavLink to={item.path} activeClassName="nav-active">
                                    {/* <i className={"iconfont icon" + item.icon}></i> */}
                                    <i className={"iconfont icon " + item.icon} ></i>
                                    <span>{item.text}</span>
                                    {i == 2 &&<Badge className="hot" text={10} style={{ marginLeft: 5 }} />}
                              </NavLink>
                          </div>
                      )
                  })  
                }
            </footer>
           
        )
    }
}