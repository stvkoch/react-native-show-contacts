//import react library
import React, {
  Component,
} from 'react-native';
// import Provider and connect feature
import {
    Provider
} from 'react-redux'


//import lellol-routes and reducers
import LellolRoutes from './lellol-routes';
import store from './store';

export default class Lellol extends Component {
  render() {
    return <Provider store={store}>
        <LellolRoutes/>
    </Provider>;
  }
}
