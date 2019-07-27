import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputSet from './InputSet';
import SaveButton from './SaveButton';
import LocationService from '../service/LocationService';
import RemoveButton from "./RemoveButton";
import styled from "styled-components";
import oc from 'open-color';

const Dimmed = styled.div`
background: ${oc.gray[4]};
top : 0px;
left : 0px;
bottom: 0px;
right : 0px;
position : fixed;
z-index : 10;
opacity : 0.5;
`;

const Viewer = styled.div`
background : white;
position : fixed;
height : auto;
z-index : 15;
padding : 1rem;
top : 50%;
left : 50%;
transform : translate(-50%, -50%);
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

class LocationInfo extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        const { latitude, longitude } = this.props;
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

    handleClose = () => {
        this.props.onCloseLocation();
    };

    render () {
        const { handleChange, handleSaveButton, handleDeleteButton, handleClose } = this;
        const { id, title, latitude , longitude, visible } = this.props;

        if (!visible)
            return null;

        return (
            <div>
                <Dimmed onClick={handleClose}/>
                <Viewer>
                    <InputSet title={title} latitude={latitude} longitude={longitude}
                              onChange={handleChange}/>
                    <SaveButton onClick={handleSaveButton}/>
                    { id == 0 ? null : <RemoveButton onClick={handleDeleteButton}/> }
                </Viewer>
            </div>
        );
    }
};

LocationInfo.propTypes = {
    id : PropTypes.string,
    title : PropTypes.string,
    latitude : PropTypes.number,
    longitude : PropTypes.number,
    onChange : PropTypes.func,
    visible : PropTypes.bool
};

LocationInfo.defaultProps = {
    id : "0",
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0,
    visible : false
};

export default LocationInfo;
