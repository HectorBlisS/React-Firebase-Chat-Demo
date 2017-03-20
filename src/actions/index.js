import alt from '../alt';
import firebase from 'firebase';


class Actions {
	constructor(){
		this.generateActions(
				'channelsReceived',
				'channelsFailed'
			);
	}

	login(args){
		return (dispatch)=> {
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider)
				.then((user)=> {
					dispatch(user);
				})
				.catch((error)=> {
					return;
				});
		}
	}

}

export default alt.createActions(Actions);