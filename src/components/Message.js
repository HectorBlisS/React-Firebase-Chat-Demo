import React from 'react';
import {ListItem, Avatar} from 'material-ui';


class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
				<ListItem
					leftAvatar={<Avatar src={this.props.avatar}/>} >
					{this.props.message}
				</ListItem>
			);
	}
}

export default Message;