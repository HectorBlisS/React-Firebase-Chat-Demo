import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';



import AppBar from 'material-ui/AppBar';


class App extends React.Component {
	constructor(){
		super();
		
	}

	// static childContextTypes = {
	// 	muiTheme: React.PropTypes.object
	// }

	// getChildContext(){
	// 	return {
	// 		muiTheme: ThemeManager.getCurrentTheme()
	// 	};
	// }

	render(){
		return(
			<div>
				<AppBar title="BlisS' Chat"/>
				<div style={{
					display: 'flex',
					flexFlow: 'row nowrap',
					maxWidth: 1200,
					width: '100%',
					margin: '30px auto 30px'
				}}>
					<ChannelList/>
					<MessageList/>
					
				</div>
				<MessageBox/>
			</div>
				
			);
		
	}
}

export default App;
