import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputSet from './InputSet';
import SaveButton from './SaveButton';
import LocationService from '../service/LocationService';
import RemoveButton from "./RemoveButton";

class LocationInfo extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        const { latitude, longitude } = this.props;
        console.log("DEUBG[handleChange] " + value);
        console.log("DEUBG[handleChange] " + JSON.stringify(this.props));
        this.props.onChangeLocation({
            "title" : value,
            "latitude" : latitude,
            "longitude" : longitude});
    };

    handleSaveButton = () => {
        const { title, latitude, longitude } = this.props;
        LocationService.updateLocation({
            "title" : title,
            "latitude" : latitude,
            "longitude" : longitude}).then(data =>
            alert("Update 되었습니다! 멍멍! " + JSON.stringify(data))
        );
    };

    handleDeleteButton = () => {
        const { id, title, latitude, longitude } = this.props;
        LocationService.deleteLocation({
            "id" : id,
            "title" : title,
            "latitude" : latitude,
            "longitude" : longitude}).then(() =>
            alert("Remove 되었습니다! 멍멍! ")
        );
    };

    render () {
        const { handleChange, handleSaveButton, handleDeleteButton } = this;
        const { title, latitude , longitude } = this.props;
        return (
            <div>
                <InputSet title={title} latitude={latitude} longitude={longitude}
                          onChange={handleChange}/>
                <SaveButton onClick={handleSaveButton}/>
                <RemoveButton onClick={handleDeleteButton}/>
            </div>
        );
    }
};

LocationInfo.propTypes = {
    id : PropTypes.string,
    title : PropTypes.string,
    latitude : PropTypes.number,
    longitude : PropTypes.number,
    onChange : PropTypes.func
};

LocationInfo.defaultProps = {
    id : 0,
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0
};

export default LocationInfo;
