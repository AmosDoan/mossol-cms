import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import  NaverMaps from './pages/NaverMaps';
import { withNavermaps } from "react-naver-maps/dist/hocs.esm";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        const { navermaps } = this.props;
    }

    render() {
        const EnhancedApp = withNavermaps(NaverMaps);
        const { navermaps } = this.props;

        return (
            <RenderAfterNavermapsLoaded
                ncpClientId='ogoqvmuvlf'
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
            >
                <EnhancedApp/>
                <p>Navermaps Loaded!</p>
            </RenderAfterNavermapsLoaded>
        );
    }
}

export default App;
