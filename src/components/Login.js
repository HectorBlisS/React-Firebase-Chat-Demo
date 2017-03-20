import React from 'react';
import {
	Card,
	CardText,
	RaisedButton
} from 'material-ui';
import Actions from '../actions';


class Login extends React.Component {
	constructor(){
		super();
		this.onClick.bind(this);
	}

	onClick(){
		Actions.login();

	}

	render(){
		return (
				<Card style={{
					'maxWidth': '800px',
					'margin': '30px auto',
					'padding': '50px'
				}}>
					<CardText style={{
						'textAlign': 'center'
					}} >
						Inicia sesión con Google
					</CardText>

					<RaisedButton style={{
						display: 'block'
					}} onClick={this.onClick} label="login con Goole" />

				</Card>
			);
	}
}

export default Login;