import React from 'react';
import {Card} from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';

import trim from 'trim';

import firebase from '../firebaseConfig';

class MessageBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			message: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.ref = firebase.database().ref('messages');

	}

	onChange(event){
		event.preventDefault();
		this.setState({
			message: event.target.value
		});

	}

	onKeyUp(event){
		if(event.keyCode === 13 && trim(event.target.value) != ''){
			event.preventDefault();
			this.setState({
				message: ''
			});	
			this.ref.push({
				message: this.state.message,
				profilePic: 'http://vignette1.wikia.nocookie.net/pixar-roleplay/images/4/47/Boo3.jpg/revision/latest?cb=20130704174212'

			});	
			// console.log('enviando mensaje nuevo ', event.target.value);
		}
	}

	render(){
		return (
				<Card style={{
					maxWidth: 1200,
					margin: '30px auto',
					padding: 30
				}}>
					<textarea
					value={this.state.message}
					onChange={this.onChange}
					onKeyUp={this.onKeyUp}
					style={{
						width: "100%",
						borderColor: "#D0D0D0",
						resize: 'none',
						borderRadius: 3,
						minHeight: 50,
						color: "#555",
						fontSize: 14,
						outline: 'auto 0px'
					}}/>
					<RaisedButton label="Enviar" />

				</Card>
			);
	}
}

export default MessageBox;