import { NavBar ,Icon, Button} from 'antd-mobile'
import React from 'react'
import './Commodity.css'


const Commodity = (props) => {
    return (
        <div>
            <NavBar
                className="am-navbar"
                icon={<Icon type="left" />}
                onLeftClick={() => props.history.goBack()}
                
            ></NavBar>
            <img src={require("./images/chuanglian.jpg")} style={{width:'100%',height:'50%'}}></img>
            <div className="btnbottom">
                <div className="left">
                    <div className="left-1"> 
                        <i className="iconfont icon-dianpu" style={{fontSize:'18px',color:'#ff5000',position:'absolute',left:'11.5px',top:'-5px'}}/>
                        <span>店铺</span>
                    </div>
                    <div className="left-2">
                        <i className="iconfont icon-kefu" style={{fontSize:'18px',position:'absolute',left:'14px',top:'-21px'}}/>
                        <span>客服</span>
                    </div>
                    <div className="left-3">
                        <i className="iconfont icon-shoucang" style={{fontSize:'18px',position:'absolute',left:'12px',top:'-7px'}}/>
                        <span>收藏</span>
                    </div>
                </div>
                <div className="right-1">
                    <span>加入购物车</span>
                </div>
                <div className="right-2">
                    <span>立即购买</span>
                </div>
            </div>
        </div>
    )
}

export default Commodity
