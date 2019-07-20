import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
display: flex;
position: fixed;
align-items: center;
justify-content : center;
height : 60px;
width : 100%;
top 0px;
z-index : 5;

background : ${oc.indigo[5]};
color: white;
border-bottom: 1px solid ${oc.indigo[6]};
box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

font-size: 2.5rem;
`;

const Header = () => (
    <Wrapper>
        Mossol MENU
    </Wrapper>
);

export default Header;
