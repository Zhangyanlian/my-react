


import "./index.scss";

import { NavBar, Icon } from 'antd-mobile';
export class Head extends Component{
    render(){
        let{
            title
        }=this.props
        return(
            <header>
                <NavBar
                    mode={"dark"}
                    // leftContent="Back"
                    // mode="light"
                    icon={<Icon type="left" />}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{title}</NavBar>
            </header>
        )
    }
}