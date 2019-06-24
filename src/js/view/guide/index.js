


import "./index.scss";
import {Carousel} from "antd-mobile";
import {Link} from "react-router-dom";
import { Head } from "../../components/head";

export class Guide extends Component{
   state={
       imgs:[
           require("@/assets/daohang1.jpg"),
           require("@/assets/daohang2.jpg"),
           require("@/assets/daohang3.jpg"),
           require("@/assets/daohang4.jpg"),
           require("@/assets/daohang5.jpg"),
           require("@/assets/daohang6.jpg"),
       ]
   }
    render(){
        console.log(this.state.imgs);
        return(
            <div>
               
                <Head title ="动画引导页"></Head>
                {/* <h2>guide --- 引导页 --- guide</h2> */}
             
                    <Carousel
                        autoplay={false}
                        infinite
                        >
                    {
                        this.state.imgs.map((img,i)=>{
                            return(
                            <Link to="/app" key={i}
                                style={{display:"inline-block" , width: '100%', height:"100%"}}>
                                <img src={img} 
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top',height:"100%"}}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    }}
                                
                            />
                            </Link>
                            )
                        })
                    }
                    </Carousel>
            
          
            </div>
        )
    }
}