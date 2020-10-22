import React from 'react';
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom';
import Home from './Home.js';
import Cart from './Cart';
import Mytab from './Mytab';
import Mytaobao from './Mytaobao.js';
import List from './List'
import Search from './Search'
import Commodity from './Commodity'

const App = () => {
	return <Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/cart" component={Cart}/>
            <Route path="/list" component={List}/>
            <Route path="/taobao" component={Mytaobao}/>
			<Route path="/home/search" component={Search}/>
			<Route path="/commodity" component={Commodity}/>
			<Route render={()=><Redirect to='/'/>}></Route>
		</Switch>

	</Router>	
}
export default App;