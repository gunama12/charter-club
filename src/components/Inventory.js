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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Inventory extends Component {
	constructor(props){
		super(props);
		this.state = {
			keyword: ""
		};
	}
	handleKeywordChange = keyword => event => {
	    this.setState({ [keyword]: event.target.value });
	};
	render() {
	  	const { classes } = this.props;
	  	let { vehicles } = this.props;
	  	let dataToShow = [];
	  	if(this.state.keyword !== ""){
	  		dataToShow = vehicles.filter( (vehicle) => {
		        return (vehicle.brand.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1) || 
		        	   (vehicle.model.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1);
		    });
	  	}else{
	  		dataToShow = vehicles;
	  	}
	  	return (
	  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
		        <Grid item container justify="space-between" direction="row" className={classes.paper}>
			        <Typography variant="h5" component="h3">
			          	Vehicle Inventory
			       	</Typography>
			       	<TextField
				       	id="standard-search"
				       	label="Search field"
			          	type="search"
			          	margin="normal"
			          	value={this.state.keyword}
	        			onChange={this.handleKeywordChange('keyword')}
				    />
				</Grid> 
		        <Table className={classes.table}>
		        	<TableHead>
		          		<TableRow>
		            		<TableCell>Brand</TableCell>
		            		<TableCell align="right">Model</TableCell>
		            		<TableCell align="right">Year</TableCell>
		            		<TableCell align="right">Action</TableCell>
		          		</TableRow>
		        	</TableHead>
		        	<TableBody>
					{dataToShow.map(row => (
						<TableRow key={row.id}>
						    <TableCell component="th" scope="row">
						        {row.brand}
						    </TableCell>
				        	<TableCell align="right">{row.model}</TableCell>
			              	<TableCell align="right">{row.year}</TableCell>
						    <TableCell align="right">
						    	<Button variant="contained" color="secondary" className={classes.button}>
								        Edit
								</Button>
						    </TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</Grid>
	  	);
	}
}

Inventory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Inventory);