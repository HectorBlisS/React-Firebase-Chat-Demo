import Actions from '../actions';
import firebase from '../firebaseConfig';

let channelsRef = firebase.database().ref('channels');

let ChannelSource = {
	getChannels: {
		remote(state){
			return new Promise((resolve, reject)=> {
				channelsRef.once('value', (data)=> {
					let channels = data.val();
					resolve(channels);
				});
			});
		},
		success: Actions.channelsReceived,
		error: Actions.channelsFailed
	}
}; 

export default ChannelSource;

