import axios from 'axios';

const KEY = 'AIzaSyA8UIqZS0l8bBLDGu1TQUgt-5JAqjeTa0E';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});