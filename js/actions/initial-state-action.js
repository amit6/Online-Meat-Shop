function initialStateAction() {
	return {
		type: 'INITIAL_STATE',
		payload: new Promise( (resolve, reject) => {
			const xhr= new XMLHTTPRequest();
			xhr.open('GET', '../../data/fetchItems.json');
			xhr.onLoad= ()=> resolve(xhr.responseText);
			xhr.onError= ()=> reject(xhr.statusText);
			xhr.send();
		})
	}
}

export default initialStateAction;