import React, {
  Component,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

//import LellolMap from './containers/lellol-map';

import ContactList from './container/contactList';

export default class LellolRoutes extends Component {
    render(){
        return <Router>
            <Scene key="root" tabs={false} hideNavBar={true}>
                <Scene key="ContactList" initial={true} component={ContactList}  hideNavBar={true}/>
            </Scene>
        </Router>
    }
}
