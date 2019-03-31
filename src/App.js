import React, { Component } from 'react';
import { Styles } from './Styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Profile from './components/Profile';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import order from './data/order.json';
import vehicle from './data/vehicle.json';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			orders: order.data,
			vehicles: vehicle.data
		};
	}
	handleAction = (status, id) => {
		let orders = this.state.orders;
		let index = orders.findIndex((obj => obj.id === id));
		//update order status by index
		orders[index].status = status;
		this.setState({
			orders: orders
		})
	}
  	render() {
	  	const { classes } = this.props;
	    return (
		    <BrowserRouter>
		    	<div className={classes.root}>
		      		<AppBar position="static">
		        		<Toolbar>
		          			<Typography variant="h6" color="inherit" className={classes.grow}>
		            			Charter Club
		          			</Typography>
		          			<Link to='/' component={RouterLink} color="inherit" className={classes.link}>Dashboard</Link>
		          			<Link to='/inventory' component={RouterLink} color="inherit" className={classes.link}>Inventory</Link>
		        			<Link to='/profile' component={RouterLink} color="inherit" className={classes.link}>Profile</Link>
		        		</Toolbar>
		      		</AppBar>     
		      		<Switch>
			  			<Route 
			  				path="/" 
			  				exact 
			  				component={() => <Dashboard orders={this.state.orders} onActionClick={this.handleAction}/>}
			  			/>
			  			<Route 
			  				path="/inventory" 
			  				exact 
			  				component={() => <Inventory vehicles={this.state.vehicles}/>}
			  			/>
			  			<Route 
			  				path="/profile" 
			  				exact 
			  				component={() => <Profile/>}
			  			/>
					</Switch>  
		    	</div>
	    	</BrowserRouter>
	    );
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(App);