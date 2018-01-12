import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// <Route path="/dashboard" component={Dashboard} />
		// <Route path="/settings" component={Settings} />
		// <Route path="/analytics" component={Analytic} />
		// <IndexRoute component={MainApp} />

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './components/Home.jsx';
import ParentComponent from './components/UILayout/Parent.jsx';
import NewTradeComponent from './components/NewTrade/NewTradeComponent.jsx';
import TradeRecapComponent from './components/TradeRecap/TradeRecapComponent.jsx';
import ConfirmTradeComponent from './components/ConfirmTrade/ConfirmTradeComponent.jsx'
import Login from './components/Login.jsx';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory} >
	<Route path="/login" component={Login} />
	<Route path="/" component={ParentComponent}>
	<Route path="/newTrade" component={NewTradeComponent} />
	<Route path="/tradeRecap" component={TradeRecapComponent} />
	<Route path="/confirmTrade" component={ConfirmTradeComponent} />
		<IndexRoute component={Home} />
		</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('mountapp'));