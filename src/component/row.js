import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles';

/*
<Row row={row} onPressRow={....}/>
*/
class Row extends Component {

  render() {
    let unknowImage   = require('../assets/imgs/ic_contact_phone_black.png');
    let sendIconImage = require('../assets/imgs/ic_message_black.png');

    return (<TouchableHighlight
                onPress={()=>{
                  this.props.onPressOpenDetail(this.props.row)
                }}>
              <View style={styles.row}>
                <View style={styles.rowImg}>
                    <Image source={unknowImage} style={styles.rowImageIco}/>
                </View>
                <View style={styles.rowText}>
                  <View style={styles.rowFamilyName}>
                    <Text style={styles.givenName}>
                      {this.props.row.givenName}
                    </Text>
                  </View>
                  <View style={styles.rowGivenName}>
                    <Text style={styles.familyName}>
                      {this.props.row.familyName}
                    </Text>
                  </View>
                </View>
                <View styles={styles.rowCommand}>
                </View>
              </View>
            </TouchableHighlight>);
    }

}

  export default Row;
