import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
require('./css/index.css'); 

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const MUI = () => (
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	);

ReactDOM.render( <MUI/>, document.getElementById('app'));