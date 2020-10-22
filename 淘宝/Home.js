import { Button, Carousel} from 'antd-mobile'
import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Search from './Search'
import './Home.css'
import Mytab from './Mytab'
// const contentStyle = {
//     width:'100%',
//     height: '18%',
//     color: '#fff',
//     lineHeight: '120px',
//     textAlign: 'center',
//   };

const Home = () => {
    return (
        
        <div className="div">
            <div className="div1">
                <img src={require("./images/tao.png")}></img>
                {/* <i className='iconfont icon-taoicon'></i>  */}
                
                <NavLink to="./home/search" >
                    {/* <img src={require('./images/search.png')}></img> */}

                    <Button className="button">
                        <img src={require("./images/sousuo.png")} style={
                            {
                                width:'15px',
                                height:'15px',
                                color: 'white',
                                marginLeft:'33%',
                                marginTop:'1px'
                            }
                        }></img>
                        寻找宝贝店铺
                    </Button>
                </NavLink>
            </div>
            <div className="div2">
                <Carousel autoplay="true"
                dotStyle={{
                        height: '8px',
                        width: '8px',
                        borderRadius: '100%',
                        backgroundColor:'#fff',
                        
                        margin:' 10px 2px',
                        opacity: 0.5,
                        zIndex:'100'
                        
                    }}                
                dotActiveStyle={
                    {
                        margin:'10px',
                        backgroundColor:'#FF4E22'
                    }
                }
                dotPosition="bottom"
                infinite="true">
                    <div>
                        <img src={require('./images/lunbo1.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo2.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo3.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo4.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo5.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo6.jpg')} className="img1" alt=""></img>
                    </div>
                    <div>
                        <img src={require('./images/lunbo7.jpg')} className="img1" alt=""></img>
                    </div>
                    
                </Carousel>
                <div>
                    <img src={require('./images/lunbo.png')} className='img2' alt=""></img>
                </div>
            </div>
            <div className="div3"></div>
            <div className="div4">
                <img src={require('./images/like.png')}alt=""></img>
            </div>
            <div className="div5">
                <NavLink to="/commodity">
                    <div className="div5-div1" >
                        <img src={require('./images/chuanglian.jpg')} className="div5-img" alt=""></img>
                        <div className="div5-div1-1">
                            <span>出口原单棉麻本色别墅帘小窗帘小短帘65*145cm 单片价</span>
                        </div>
                        <div className="div5-div1-2">
                            <span className="span1">￥</span>
                            <span className="span2">41.65</span>
                            <span className="span3">16人已购买</span>
                        </div>
                    </div>
                </NavLink>
                
                <div className="div5-div2" >
                    <img src={require('./images/img2.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>日式长柄天然原木酸枣木实木勺直柄油勺不粘锅煲汤勺稀饭勺粥勺</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">12.9</span>
                        <span className="span3">13人已购买</span>
                    </div>
                </div>
                <div className="div5-div3" >
                    <img src={require('./images/yumao.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>浪漫羽毛珠帘软隔断玄关珠帘橱窗吊顶客厅门口婚庆许愿</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">49.9</span>
                        <span className="span3">35人已购买</span>
                    </div>
                </div>
                <div className="div5-div4" >
                    <img src={require('./images/img4.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>英伦美式乡村田园风格欧式客厅吊篮垫卧室床边毯地垫电脑椅垫</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">43</span>
                        <span className="span3">221人已购买</span>
                    </div>
                </div>
                <div className="div5-div5" >
                    <img src={require('./images/img5.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>被套单件纯棉贡缎被罩单人双人新品秋冬全棉布加厚酒店被单定做</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">130</span>
                        <span className="span3">105人已购买</span>
                    </div>
                </div>
                <div className="div5-div6" >
                    <img src={require('./images/img6.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>定做飘窗垫窗台垫榻榻米坐垫子防滑儿童卧室阳台垫可机洗飘台毯子</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">25.46</span>
                        <span className="span3">144人已购买</span>
                    </div>
                </div>   
                <div className="div5-div7" >
                    <img src={require('./images/img7.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>田园创意挂钟表家用客厅卧室圆形个性装饰钟简约静音欧式乡村时钟</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">99</span>
                        <span className="span3">28人已购买</span>
                    </div>
                </div>   
                <div className="div5-div8" >
                    <img src={require('./images/img8.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>良品简约无印风被套床上用品100全棉纯棉格子床单水洗棉三四件套</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">178</span>
                        <span className="span3">205人已购买</span>
                    </div>
                </div>  
                <div className="div5-div9" >
                    <img src={require('./images/img9.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>四季日式软底无声居家居棉拖鞋室内木地板女士情侣大码布底男夏季</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">19.9</span>
                        <span className="span3">103人已购买</span>
                    </div>
                </div>  
                <div className="div5-div10" >
                    <img src={require('./images/img10.jpg')} className="div5-img" alt=""></img>
                    <div className="div5-div1-1">
                        <span>韩国进口茶杯垫碗盘垫硅胶耐高温防滑圆形精美蕾丝花盆装饰垫正品</span>
                    </div>
                    <div className="div5-div1-2">
                        <span className="span1">￥</span>
                        <span className="span2">25</span>
                        <span className="span3">18人已购买</span>
                    </div>
                </div>  

            </div>
            <Mytab/>

           
        </div>
    )
}

export default Home
