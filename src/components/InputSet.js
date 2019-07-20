import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoInput = styled.input`
width : 100%;
border : none;
outline: none;
font-weight : 500;
font-size: 1.25rem;
`;

class InputSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            latitude : props.latitude,
            longitude : props.longitude,
        };
    }

    render() {
        const { title, latitude, longitude, onChange } = this.props;

        return (
            <div>
                <InfoInput
                    name = "title"
                    onChange = {onChange}
                    placeholder = "메뉴이름"
                    value = {title}
                />
                좌표 : {latitude} , {longitude}
            </div>
        );
    }
}

InputSet.propTypes = {
    onChange : PropTypes.func,
    title : PropTypes.string,
    latitude : PropTypes.number,
    longitude : PropTypes.number
};

export default InputSet;
