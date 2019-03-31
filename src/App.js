import React, { Component } from 'react';
import { Styles } from './Styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
  	const { classes } = this.props;
    return (
    	<div className={classes.root}>
      		<AppBar position="static">
        		<Toolbar>
          			<Typography variant="h6" color="inherit" className={classes.grow}>
            			Charter Clubs
          			</Typography>
          			<Button color="inherit">Dashboard</Button>
        		</Toolbar>
      		</AppBar>
        		
        		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
        			<Typography variant="h5" component="h3">
          			Dashboard
        		</Typography>
        		<Typography component="p">
          			Dashboard Page
        		</Typography>
        		</Grid>
    	</div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(App);