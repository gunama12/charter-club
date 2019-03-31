import React, { Component } from 'react';
import { Styles } from '../Styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class VehicleEdit extends Component {
	constructor(props){
		super(props);
		this.state = {
			brand: "",
			model: "",
			year: ""
		};
		this.params = this.props.params;
	}
	componentDidMount(){
		let vehicle = this.props.vehicles.find(obj => obj.id == this.params.id);
		this.setState({
			brand: vehicle.brand,
			model: vehicle.model,
			year: vehicle.year	
		})
	}
	handleSubmit = (event) => {
		let { brand, model, year } = this.state;
	    event.preventDefault();
	    this.props.onVehicleUpdate(parseInt(this.params.id), brand, model, year);
	    //redirect to inventory
		this.props.history.push('/inventory');
	}
	render() {
	  	const { classes } = this.props;
	  	return (
	  		<Grid item xs={12} container justify="center" direction="column" className={classes.paper}>
		        <Typography variant="h5" component="h3">
		          	Edit Vehicle
		        </Typography>		
		        <form onSubmit={this.handleSubmit}>
				    <TextField
				        id="brand"
				        label="Brand"
				        fullWidth
				        margin="normal"		
          				value={this.state.brand}  
          				required   
          				onChange={(event) => { this.setState({brand: event.target.value}); }}   
			        />
			        <TextField
				        id="model"
				        label="Model"
				        fullWidth
				        margin="normal"		
          				value={this.state.model} 
          				required    
          				onChange={(event) => { this.setState({model: event.target.value}); }}   
			        />
			        <TextField
				        id="year"
				        label="Year"
				        fullWidth
				        margin="normal"		
          				value={this.state.year}     
          				onChange={(event) => { this.setState({year: event.target.value}); }}   
			        />
			        <input type="submit" value="Submit" hidden ref={submit => this.submit = submit}/>
				    <Button variant="contained" onClick={ () => this.submit.click() } className={classes.button}>
				        SAVE
	                </Button>
	                <Button variant="contained" color="primary" onClick={ () => this.props.history.goBack() } className={classes.button}>
				        CANCEL
	                </Button>						
	 			</form>  	        
			</Grid>
	  	);
	  }
}

VehicleEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(VehicleEdit);