
import React, {
  Component,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

import styles from '../styles';


/*
<SearchBar onPressSearchBar={(text)=>{...}} />
*/
class DetailBar extends Component {
  render() {
    const imageChevronLeft = require('../assets/imgs/ic_chevron_left_white.png');
    const imageCall = require('../assets/imgs/ic_call_white.png');
    const imageSMS = require('../assets/imgs/ic_textsms_white.png');

    return (
      <View style={styles.navBar}>
        <TouchableHighlight
          onPress={this.props.onPressBack}
          style={styles.navBarBtn}
          activeOpacity={1}
          >
          <Image
            source={imageChevronLeft}
            style={styles.navBarImage}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.onPressSendSMS}
          style={styles.navBarBtn}
          activeOpacity={1}
          >
          <Image
            source={imageSMS}
            style={styles.navBarImage}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.onPressCall}
          style={styles.navBarBtn}
          activeOpacity={1}
          >
          <Image
            source={imageCall}
            style={styles.navBarImage}
          />
        </TouchableHighlight>
      </View>
    );
  }

}

  export default DetailBar;
