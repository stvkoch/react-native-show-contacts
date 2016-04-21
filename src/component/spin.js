import React, {
  Component,
  View,
} from 'react-native';

import styles from '../styles';
import Spinner from 'react-native-spinkit';



class Spin extends Component {

  render() {
    return (
      <View style={styles.container, styles.center}>
        <Spinner
          size={50}
          type={'ThreeBounce'}/>
      </View>
    );
  }

}

  export default Spin;
