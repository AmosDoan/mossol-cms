import React from 'react';
import PropTypes from 'prop-types';

const LocationInfo = ({title, latitude, longitude}) => {
    return (
        <div>
            {title}
            {latitude} , {longitude}
        </div>
    );
};

LocationInfo.propTypes = {
    title : PropTypes.string,
    latitude : PropTypes.number,
    longitude : PropTypes.number
};

LocationInfo.defaultProps = {
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0
};

export default LocationInfo;
