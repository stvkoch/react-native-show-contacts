import React, {
  Component,
  Text,
  View,
  Image
} from 'react-native';

import styles from '../styles';

/*
<Row row={row} onPressRow={....}/>
*/
class Detail extends Component {

  render() {
    let unknowImage   = require('../assets/imgs/ic_contact_phone_black.png');
    let sendIconImage = require('../assets/imgs/ic_message_black.png');

    return (<View>
        <View style={styles.detailContactImage}>
            <Image source={unknowImage} style={styles.detailImage}>
              <Text style={styles.detailContactName}>
              </Text>
            </Image>
        </View>
        <View style={styles.detailCommands}>
          
        </View>
    </View>);
    }

}

  export default Detail;
