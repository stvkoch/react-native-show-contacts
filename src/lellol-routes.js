import React, {
  Component,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

//import LellolMap from './containers/lellol-map';

import styles from './styles';

import ContactList from './container/contactList';
import ContactDetail from './container/contactDetail';

export default class LellolRoutes extends Component {
    render(){
        return <Router>
            <Scene key="root" tabs={false} hideNavBar={true}>
                <Scene key="ContactList" initial={true} component={ContactList}  hideNavBar={true}/>
                <Scene key="ContactDetail" component={ContactDetail} />
            </Scene>
        </Router>
    }
}
