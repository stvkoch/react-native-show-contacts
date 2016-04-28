import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import Communications from 'react-native-communications';
import styles from '../styles';

/*
<Row row={row} onPressRow={....}/>
*/
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {indexSelected: 0};
  }

  getSelectedPhoneNumber(){
    return String(this.props.contact.phoneNumbers[this.state.indexSelected].number);
  }

  render() {
    let unknowImage   = require('../assets/imgs/ic_contact_phone_black.png');
    let smsIconImage = require('../assets/imgs/ic_sms_white.png');
    let callIconImage = require('../assets/imgs/ic_call_white.png');

    return (<View style={styles.container}>
        <View style={styles.card}>
          {this.props.contact.phoneNumbers.map((contactNumber, idx)=> {
            let styleRow = (idx == this.state.indexSelected) ? styles.numberSelected : styles.numberUnselected;
            return(<TouchableHighlight onPress={()=>{this.setState({indexSelected: idx})}}>
              <View style={[styles.detailContactNumber, styleRow]}>
                  <Text style={styles.detailContactName}>
                   {contactNumber.number}
                  </Text>
            </View>
          </TouchableHighlight>);
          })}
        </View>

        <View style={styles.detailCommands}>
          <TouchableHighlight onPress={()=>{
              Communications.phonecall(this.getSelectedPhoneNumber(), false);
          }} style={styles.callBnt}>
            <Image source={callIconImage} style={styles.circle}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
              Communications.text(this.getSelectedPhoneNumber());
          }} style={styles.smsBnt}>
              <Image source={smsIconImage} style={styles.circle}/>
          </TouchableHighlight>
        </View>
    </View>);
    }

}

  export default Detail;
