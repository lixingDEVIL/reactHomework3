import React from 'react';
import {Button,TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
class Mytab extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'home'
      };
	}

	render() {
    const {pathName} = this.props.location;
    // if(pathName.split('/').length>2){
    //   return null;
    // }
		return (
      <div>
			<div style={{ position: 'fixed', width: '100%', bottom: 0,zIndex:'10010' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff4e22"
          barTintColor="#ffffff"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
                <i className='iconfont icon-shouye'></i> 
            }
            selectedIcon={
                <i className='iconfont icon-icon_home'></i> 
            }
            selected={pathName === '/'}
            onPress={() => {
              this.props.history.push('/')
              
            }}
            data-seed="logId"
          >
          
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className='iconfont icon-dingdan1'></i>
            }
            selectedIcon={
                <i className='iconfont icon-dingdanliebiao'></i>
            }
            title="订单列表"
            key="list"
            selected={pathName === '/list'}
            onPress={() => {
              this.props.history.push('/list')
            }}
            data-seed="logId1"
          >
          
          </TabBar.Item>
          <TabBar.Item
            
            title="购物车"
            key="Friend"
            icon={<i className='iconfont icon-che'></i> }
            selectedIcon={<i className='iconfont icon-gouwuche1'></i>}
            selected={pathName === '/cart'}
            onPress={() => {
              this.props.history.push('/cart')
            }}
  
          >
          
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className='iconfont icon-yonghu'></i> 
            }
            selectedIcon={
                <i className='iconfont icon-users-fill'></i> 
            }
            title="我的淘宝"
            key="my"
            selected={pathName === '/taobao'}
            onPress={() => {
              this.props.history.push('/taobao')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
      </div>
    );
	}

	// return <div>
	// 	<Button type="primary">开始使用</Button>
	// </div>
}

export default withRouter(Mytab);