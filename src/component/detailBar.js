
import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import styles from '../styles';


/*
<SearchBar onPressSearchBar={(text)=>{...}} />
*/
class DetailBar extends Component {
  getContactName() {
    let giveName = this.props.contact.givenName || '';
    let familyName = this.props.contact.familyName || '';
    return `${giveName} ${familyName}`;
  }
  render() {
    const imageChevronLeft = require('../assets/imgs/ic_chevron_left_white.png');
    const imageCall = require('../assets/imgs/ic_call_white.png');
    const imageSMS = require('../assets/imgs/ic_sms_white.png');
    let contactName = `${this.props.contact.givenName} ${this.props.contact.familyName}`;
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
        <Text style={styles.navBarTitle}>{this.getContactName()}</Text>
      </View>
    );
  }

}

  export default DetailBar;
