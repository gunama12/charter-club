import React, { Component } from 'react';
import { Styles } from './Styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';

class App extends Component {
  render() {
    return (
    	<div className={Styles.root}>
      		<AppBar position="static">
        		<Toolbar>
          			<Typography variant="h6" color="inherit">
            			Charter Clubs
          			</Typography>
        		</Toolbar>
      		</AppBar>
    	</div>
    );
  }
}

export default App;
