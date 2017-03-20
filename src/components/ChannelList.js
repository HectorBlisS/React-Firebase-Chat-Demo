import React from 'react';
import Channel from './Channel';
import connectToStores from 'alt-utils/lib/connectToStores';
import Chatstore from '../stores/ChatStore';

import {List, Card, CircularProgress} from 'material-ui';

@connectToStores
class ChannelList extends React.Component {
	constructor(props){
		super(props);
		// this.state = {
		// 	channels: [
		// 		{name:'Gatitos', key:0},
		// 		{name:'Sexo', key:1},
		// 		{name:'Runas', key:2}
		// 	]
		// };
		ChatStore.getChannels();
	}

	static getStores(){
		return [ChatStore];
	}

	static getPropsFromStores(){
		return ChatStore.getState();
	}

	render(){
		if(!this.props.channels){
			return (
					<Card style={{
						flexGrow: 1
					}}>
						<CircularProgress
							mode="indeterminate"
							style={{
								paddingTop: '20px',
								paddingBottom: '20px',
								margin: '0 auto',
								display: 'block',
								width: '60px'
							}} />
					</Card>
				)
		}

		// debugger;
		let channelNodes = _(this.props.channels)
		.keys()
		.map(
				(k) => {
					let channel = this.props.channels[k];
					return (
						<Channel key={channel.key} channel={channel.name} />
						);
				} // function(message){}
			)
		.value();

		return(
			<div style={{
					flexGrow: 1
				}}>
				<Card>
					<List>
						{channelNodes}
					</List>
				</Card>
			</div>
			);
	}
}

export default ChannelList;