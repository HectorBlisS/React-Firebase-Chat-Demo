import React from 'react';
import MessageList from './MessageList';
// import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import Login from './Login';

// conetamos con los stores
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';


import AppBar from 'material-ui/AppBar';


@connectToStores
class App extends React.Component {
	constructor(){
		super();
		
	}

	static getStores(){
		return [ChatStore];
	}

	static getPropsFromStores(){
		return ChatStore.getState();
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
		let view = <Login/>;

		// if(this.state.user){
		if(true){
			view = (
					<div>
						<div style={{
							display: 'flex',
							flexFlow: 'row nowrap',
							maxWidth: 1200,
							width: '100%',
							margin: '30px auto 30px'
						}}>
							
							<MessageList/>
							
						</div>
						<MessageBox/>
					</div>
				);
		}

		return(
			<div>
				<AppBar title="BlisS' Chat"/>
				{view}
			</div>
				
			);
		
	}
}

export default App;
