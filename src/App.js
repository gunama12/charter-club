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
import VehicleEdit from './components/VehicleEdit';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import order from './data/order.json';
import vehicle from './data/vehicle.json';
import profile from './data/profile.json';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			orders: order.data,
			vehicles: vehicle.data,
			profile: profile
		};
	}
	handleAction = (status, id) => {
		let orders = this.state.orders;
		let index = orders.findIndex((obj => obj.id === id));
		//update order status by index
		orders[index].status = status;
		this.setState({
			orders: orders
		});
	}
	handleProfileSave = (name, email, address) => {
		let profile = {
			name: name, 
			email: email, 
			address: address
		};
		this.setState({
			profile: profile
		});
	}
	handleVehicleUpdate = (id, brand, model, year) => {
		let vehicles = this.state.vehicles;
		let index = vehicles.findIndex((obj => obj.id === id));
		//update vehicle by index
		vehicles[index].brand = brand;
		vehicles[index].model = model;
		vehicles[index].year = year;
		this.setState({
			vehicles: vehicles
		});
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
		        			<Link to='/profile' component={RouterLink} color="inherit" className={classes.link}> | Hi, {this.state.profile.name}</Link>
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
			  				path="/inventory-edit/:id" 
			  				exact 
			  				component={(routerProps) => (	
			  											<VehicleEdit 
			  												params={routerProps.match.params} 
			  												vehicles={this.state.vehicles} 
			  												history={routerProps.history}
			  												onVehicleUpdate={this.handleVehicleUpdate}
			  											/>
			  				)}
			  			/>
			  			<Route 
			  				path="/profile" 
			  				exact 
			  				render={({ history }) => (
									<Profile profile={this.state.profile} onProfileSave={this.handleProfileSave} history={history}/>
							)}
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