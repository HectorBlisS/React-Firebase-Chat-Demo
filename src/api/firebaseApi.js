import _ from 'lodash';

export default class firebaseArray {
	constructor(ref){
		this.ref = ref;
		this.list = {};
		// this.ref.on('value', this.created, this.error);
         // this.ref.on('child_moved', moved, error);
         // this.ref.on('child_changed', updated, error);
         // this.ref.on('child_removed', removed, error);
	}

	getList(){
		this.list = this.ref.once('value')
			.then((snap)=>{
				let val = snap.val();
				// val.key = snap.key;
				let list = _.values(val);
				return list;
			});
		return this.list;
	}



	// created(snap, prevChild) {
	// 	let msgVal = snap.val();
	// 	console.log(msgVal);
	// 	msgVal.key = snap.key;
	// 	this.list.push(msgVal);
	// 	});

	// };

	// error(snap){
	// 	console.log(snap);
	// }

	// getList(){
	// 	return this.list;
	// }


	
}