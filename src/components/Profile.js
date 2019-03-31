import React, { Component } from 'react';
import { Styles } from '../Styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
  render() {
  	const { classes } = this.props;
  	return (
  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
	        <Typography variant="h5" component="h3">
	          	Profile
	        </Typography>	       
		</Grid>
  	);
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Profile);