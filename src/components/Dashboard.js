import React, { Component } from 'react';
import { Styles } from '../Styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			keyword: ""
		};
	}
	handleKeywordChange = keyword => event => {
	    this.setState({ [keyword]: event.target.value });
	};
	handleAction(e, status, id) {
	    e.preventDefault();
	    this.props.onActionClick(status, id);
	}
	getVehicleDesc = (id) => {
		let vehicle = this.props.vehicles.find((obj => obj.id === id));
		return vehicle.brand+" "+vehicle.model;
	}
  	render() {
	  	const { classes } = this.props;
		let { orders } = this.props;
		for (var i = 0; i <  orders.length; i++) {
			orders[i].vehicle = this.getVehicleDesc(orders[i].vehicle_id);
		}
	  	let dataToShow = [];
	  	if(this.state.keyword !== ""){
	  		dataToShow = orders.filter( (order) => {
		        return (order.customer_name.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1) ||
		        		(order.vehicle.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1);
		    });
	  	}else{
	  		dataToShow = orders;
	  	}

	  	return (
	  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
		        <Grid item container justify="space-between" direction="row" className={classes.paper}>
		        	<Typography variant="h5" component="h3">
		          		Orders
		        	</Typography>
		        	<TextField
			         	id="standard-search"
			          	label="Search Customer/Vehicle"
			          	type="search"
			          	margin="normal"
			          	value={this.state.keyword}
          				onChange={this.handleKeywordChange('keyword')}
			        />
				</Grid> 
		        <Table className={classes.table}>
		        	<TableHead>
		          		<TableRow>
		            		<TableCell>Customer Name</TableCell>
		            		<TableCell align="right">Vehicle</TableCell>
		            		<TableCell align="right">Costs (SGD)</TableCell>
		            		<TableCell align="right">Status</TableCell>
		            		<TableCell align="right">Order Date</TableCell>
		            		<TableCell align="right">Return Date</TableCell>
		            		<TableCell align="center">Action</TableCell>
		          		</TableRow>
		        	</TableHead>
		        	<TableBody>
					{dataToShow.map(row => {
						let msg = "Pending";
						let badgeColor = "error";
						if(row.status === 1){
							msg = "Approved";
							badgeColor = "secondary";
						}else if(row.status === 2){
							msg = "Rejected";
							badgeColor = "primary";
						}
						return(
							<TableRow key={row.id}>
							    <TableCell component="th" scope="row">
							        {row.customer_name}
							    </TableCell>
					        	<TableCell align="right">{ row.vehicle }</TableCell>
				              	<TableCell align="right">{row.costs}</TableCell>
							    <TableCell align="right">					    	
							    	<Badge color={badgeColor} badgeContent={msg} classes={{ badge: classes.badge }} children=""/>
							    </TableCell>
						    	<TableCell align="right">{row.order_date}</TableCell>
						    	<TableCell align="right">{row.return_date}</TableCell>
						    	<TableCell align="justify">
						    		{ row.status !== 1 && row.status !== 2 &&
						    		<Button variant="contained" color="secondary" className={classes.button} onClick={(e) => this.handleAction(e, 1, row.id)}>
								        Approve
								    </Button>
									}
								    { row.status !== 1 && row.status !== 2 &&  
								    <Button variant="contained" color="primary" className={classes.button} onClick={(e) => this.handleAction(e, 2, row.id)}>
								        Reject
								    </Button>
									}
						    	</TableCell>
							</TableRow>
						);
					})}
					</TableBody>
				</Table>
			</Grid>
	  	);
	}
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Dashboard);