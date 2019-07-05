import axios from 'axios';

const API_URL = 'http://localhost:8080';

class LocationService {
    fetchAllLocation() {
        return axios.get(`${API_URL}/location`);
    }
}

export default new LocationService();