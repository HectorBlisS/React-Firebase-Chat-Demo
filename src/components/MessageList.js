import React from 'react';
import Message from './Message';

// Material ui
import {List, Card} from 'material-ui';
// Firebase and lodash
import _ from 'lodash';
import firebase from '../firebaseConfig';
// Mi librería firebase
// import firebaseArray from '../api/firebaseApi';

class MessageList extends React.Component {
	constructor(props){
		super(props);
		this.messages = [];
		this.state = {
			messages: []
		};


		// this.s = new Set();
		this.ref = firebase.database().ref('messages');
		this.ref.on('child_added', (snap)=> {
			let obj = _.merge(snap.val(), {key: snap.key});
			this.messages.push(obj);
			this.setState({
				messages: this.messages
			});
			console.log(this.state.messages);
		});
		
		

			

		// this.ref.on('child_added', (data) => {
				
			
		// 		// this.s.add(data.val());
		// 		// console.log(Array.from(this.s));
		// 		// console.log(data.key);
		// 	// A manita
		// 		// let newObj = _.merge({key: data.key}, data.val());
		// 		// this.state.messages.push(newObj);
		// 		// this.setState({
		// 		// 	messages: this.state.messages
		// 		// });

		// //mejor como objeto
		// 	if(!this.state.messages[data.key]){
		// 		let msgVal = data.val();
		// 		msgVal.key = data.key;
		// 		let messages = {};
		// 		this.state.messages[msgVal.key] = msgVal;
		// 		// console.log(messages);
		// 		this.setState({
		// 			messages: this.state.messages
		// 		});
		// 	}
				
		// });

		this.ref.on('child_removed', (data)=> {
			let key = data.key;
			delete this.state.messages[key];
			this.setState({
				messages: this.state.messages
			});

		});
		



	}


	render(){
		// debugger;
		// el lodash values es importante, convierte el objeto en array
		let messageNodes = this.state.messages.map(
				(message) => {
					return (
						<Message key={message.key} message={message.message} avatar={message.profilePic} />
						);
				} // function(message){}
			);

		return(
			<div style={{
					flexGrow: 2,
					marginLeft: '30px'
				}}>
				<Card>
					<List>
						{messageNodes}
					</List>
				</Card>
			</div>
			);
	}
}

export default MessageList;