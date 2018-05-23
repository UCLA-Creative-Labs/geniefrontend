const API_BASE_URL = 'http://localhost:3001';
const API = {
	display: API_BASE_URL + '/display',
}

const getDisplay = async () => {
	try{
		const res = await fetch(API.display, {
			method: 'POST',
			'Content-Type': 'application/json',
		});
		const json = await res.json();
		if(json.status > 200){ //do error handling later
			if(json.err){
				throw new Error(json.err);
			} else{
				throw new Error('Error occurred getting display.');
			}
		}
		return {
			err: false,
			components: json.components,
		}
	} catch(e){
		return{
			err: e.message
		}
	}
}

export { getDisplay }