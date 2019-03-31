import React, { Component } from 'react';
import { Styles } from '../Styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.profile.name,
			email: props.profile.email,
			address: props.profile.address
		};
	}
	handleSubmit = (event) => {
		let { name, email, address } = this.state;
	    event.preventDefault();
	    this.props.onProfileSave(name, email, address);
	    //redirect to home
		this.props.history.push('/');
	}
	render() {
	  	const { classes } = this.props;
	  	return (
	  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
		        <Typography variant="h5" component="h3">
		          	Profile
		        </Typography>	
		        <form onSubmit={this.handleSubmit}>
				    <TextField
				        id="standard-full-width"
				        label="Name"
				        fullWidth
				        margin="normal"		
          				value={this.state.name}  
          				required   
          				onChange={(event) => { this.setState({name: event.target.value}); }}   
			        />
			        <TextField
				        id="standard-full-width"
				        label="Email"
				        fullWidth
				        margin="normal"		
          				value={this.state.email} 
          				required    
          				onChange={(event) => { this.setState({email: event.target.value}); }}   
          				type="email"
			        />
			        <TextField
				        id="standard-full-width"
				        label="Address"
				        fullWidth
				        margin="normal"		
          				value={this.state.address}     
          				onChange={(event) => { this.setState({address: event.target.value}); }}   
			        />
			        	<input type="submit" value="Submit" hidden ref={submit => this.submit = submit}/>
				        <Button variant="contained" onClick={ () => this.submit.click() }>
				        	SAVE
	                   	</Button>						
	 			</form>       
			</Grid>
	  	);
	  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Profile);