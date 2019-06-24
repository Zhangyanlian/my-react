



import "./index.scss";

import PropTypes from "prop-types";

export default class Swipe extends Component{
    render(){
        const{
            id,
            children
        }=this.props;
        return(
            <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">
                    {
                        children && children.map((child,index)=>{
                            return(child)
                        })
                    }

                </div>
            </div>
        )
    }
    componentDidMount(){
        let {id,options,children} = this.props;
        if(children.length>0){
            let mySwipe = new Swiper("#" + id,options);
        }
    }

    // componentDidUpdata(){
    //     let {id,options,children} = this.props;
    //     if(children.length>0){
    //         let mySwipe = new Swiper("#" + id,options);
    //     }
    // }
}


Swipe.PropTypes={
    id:PropTypes.string.isRequired,
    options:PropTypes.object.isRequired
}


Swipe.item = (props)=>{
    return(
        <div className="swiper-slide">
            {props.children}
        </div>
    )

}