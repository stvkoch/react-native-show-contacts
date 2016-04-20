import React, {
  Component,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

//import LellolMap from './containers/lellol-map';

import Splash from './container/splash';

export default class LellolRoutes extends Component {
    render(){
        return <Router>
            <Scene key="root" tabs={false} hideNavBar={true}>
                <Scene key="splash" initial={true} component={Splash}  hideNavBar={true}/>
            </Scene>
        </Router>
    }
}
