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

class Dashboard extends Component {
  render() {
  	const { classes, orders } = this.props;
  	return (
  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
	        <Typography variant="h5" component="h3">
	          	Dashboard
	        </Typography>
	        <Table className={classes.table}>
	        	<TableHead>
	          		<TableRow>
	            		<TableCell>Customer Name</TableCell>
	            		<TableCell align="right">Vehicle ID</TableCell>
	            		<TableCell align="right">Costs (SGD)</TableCell>
	            		<TableCell align="right">Status</TableCell>
	            		<TableCell align="right">Order Date</TableCell>
	            		<TableCell align="right">Return Date</TableCell>
	            		<TableCell align="right"></TableCell>
	          		</TableRow>
	        	</TableHead>
	        	<TableBody>
				{orders.map(row => {
					let msg = "Pending";
					let badgeColor = "error";
					if(row.status === 1){
						msg = "Confirmed";
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
				        	<TableCell align="right">{row.vehicle_id}</TableCell>
			              	<TableCell align="right">{row.costs}</TableCell>
						    <TableCell align="right">					    	
						    	<Badge color={badgeColor} badgeContent={msg} classes={{ badge: classes.badge }} children=""/>
						    </TableCell>
					    	<TableCell align="right">{row.order_date}</TableCell>
					    	<TableCell align="right">{row.return_date}</TableCell>
					    	<TableCell align="justify">
					    		{ row.status !== 1 && row.status !== 2 &&
					    		<Button variant="contained" color="secondary" className={classes.button}>
							        Confirm
							    </Button>
								}
							    { row.status !== 1 && row.status !== 2 &&  
							    <Button variant="contained" color="primary" className={classes.button}>
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