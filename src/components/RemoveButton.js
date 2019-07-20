import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';
import { IoMdTrash } from "react-icons/io";

const Wrapper = styled.div`
text-align: left;
`;

const TrashButton = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: ${oc.gray[6]};
    cursor: pointer;

    &:hover {
        color: ${oc.gray[7]};
    }

    &:active {
        color: ${oc.gray[8]};
    }

    font-size: 1.5rem;
`;


const RemoveButton = ({onClick}) => (
    <Wrapper>
        <TrashButton onClick={onClick}>
            <IoMdTrash/>
        </TrashButton>
    </Wrapper>
);

RemoveButton.propTypes = {
    onClick: PropTypes.func
};

export default RemoveButton;