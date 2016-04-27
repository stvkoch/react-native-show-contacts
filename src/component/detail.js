import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import styles from '../styles';

/*
<Row row={row} onPressRow={....}/>
*/
class Detail extends Component {

  render() {
    let unknowImage   = require('../assets/imgs/ic_contact_phone_black.png');
    let smsIconImage = require('../assets/imgs/ic_sms_white.png');
    let callIconImage = require('../assets/imgs/ic_call_white.png');

    return (<View style={styles.container}>
        <View style={styles.card}>
          {this.props.contact.phoneNumbers.map((contactNumber)=> {

            return(<View style={styles.detailContactNumber}>
                  <Text style={styles.detailContactName}>
                   {contactNumber.number}
                  </Text>
            </View>);
          })}
        </View>

        <View style={styles.detailCommands}>
          <TouchableHighlight onPress={()=>{}} style={styles.callBnt}>
            <Image source={callIconImage} style={styles.circle}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{}} style={styles.smsBnt}>
              <Image source={smsIconImage} style={styles.circle}/>
          </TouchableHighlight>
        </View>
    </View>);
    }

}

  export default Detail;
