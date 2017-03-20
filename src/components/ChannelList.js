import React from 'react';
import Channel from './Channel';

import {List, Card} from 'material-ui';


class ChannelList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			channels: [
				{name:'Gatitos', key:0},
				{name:'Sexo', key:1},
				{name:'Runas', key:2}
			]
		};
	}

	render(){
		// debugger;
		let channelNodes = this.state.channels.map(
				(channel) => {
					return (
						<Channel key={channel.key} channel={channel.name} />
						);
				} // function(message){}
			);

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