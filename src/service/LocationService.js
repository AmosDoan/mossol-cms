import axios from 'axios';

const API_URL = 'http://localhost:8080';

class LocationService {
    fetchAllLocation() {
        return axios.get(`${API_URL}/location`);
    }

    addLocation(location) {
        let data = JSON.stringify({
            title :location.title,
            latitude : location.latitude,
            longitude : location.longitude,
            type : "KOREA_MENU"
        });
        return axios.post(`${API_URL}/location`, data)
            .then(response => {
                console.log(JSON.stringify(response));

                if (response.status != "200") {
                    alert("장소 추가 중 Error가 발생했어요ㅠㅠ 멍멍! (중복된 이름의 장소가 있을 수 있어요!)");
                    return;
                }

                alert("추가되었습니다! 멍멍!");
            }).catch(error =>{
                console.log(error.message)
            });
    }

    updateLocation(location) {
        let data = JSON.stringify({
            title :location.title,
            latitude : location.latitude,
            longitude : location.longitude,
            type : "KOREA_MENU"
        });
        return axios.put(`${API_URL}/location/${location.id}`, data)
            .then(response => {
                console.log(JSON.stringify(response));

                if (response.status != "200") {
                    alert("Update 중 Error가 발생했어요ㅠㅠ 멍멍!");
                    return;
                }

                alert("Update 되었습니다! 멍멍!");
            }).catch(error =>{
                console.log(error.message);
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
                console.log(JSON.stringify(response));

                if (response.status != "200") {
                    alert("Remove 중 Error가 발생했어요ㅠㅠ 멍멍!");
                    return;
                }

                alert("Remove 되었습니다! 멍멍! ");
            }).catch(error =>{
                console.log(error.message)
            });
    }
}

export default new LocationService();