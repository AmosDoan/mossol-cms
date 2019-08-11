import axios from 'axios';

const API_URL = 'http://mossol.net:8080';

class LocationService {
    fetchAllLocation() {
        return axios.get(`${API_URL}/location`);
    }

    updateLocation(location) {
        let data = JSON.stringify({
            title :location.title,
            latitude : location.latitude,
            longitude : location.longitude,
            type : "KOREA_MENU"
        });
        return axios.post(`${API_URL}/location`, data)
            .then(response => {
                return response.data;
            });
    }

    deleteLocation(location) {
        let target = JSON.stringify({
            id: location.id,
            title : location.title,
            latitude : location.latitude,
            longitude : location.longitude,
            type : "KOREA_MENU"
        });

        const url = `${API_URL}/location/` + location.id;

        return axios.delete(url, {data : target})
            .then(response => {
                return response.data;
            });
    }
}

export default new LocationService();