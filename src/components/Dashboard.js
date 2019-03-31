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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Dashboard extends Component {
  render() {
  	const { classes } = this.props;
  	return (
  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
	        <Typography variant="h5" component="h3">
	          	Dashboard
	        </Typography>
	        <Table className={classes.table}>
	        	<TableHead>
	          		<TableRow>
	            		<TableCell>Dessert (100g serving)</TableCell>
	            		<TableCell align="right">Calories</TableCell>
	            		<TableCell align="right">Fat (g)</TableCell>
	            		<TableCell align="right">Carbs (g)</TableCell>
	            		<TableCell align="right">Protein (g)</TableCell>
	          		</TableRow>
	        	</TableHead>
	        	<TableBody>
				{rows.map(row => (
					<TableRow key={row.id}>
					    <TableCell component="th" scope="row">
					        {row.name}
					    </TableCell>
			        	<TableCell align="right">{row.calories}</TableCell>
		              	<TableCell align="right">{row.fat}</TableCell>
					    <TableCell align="right">{row.carbs}</TableCell>
				    	<TableCell align="right">{row.protein}</TableCell>
					    </TableRow>
				))}
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