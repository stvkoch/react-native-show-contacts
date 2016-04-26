// packages
import React, {
  Component,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

//style
import styles from '../styles';

// components
import Detail from '../component/detail';
import DetailBar from '../component/detailBar';

// react-redux
const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressCall: ()=>{
      console.log('onPressCall');
    },
    onPressSendSMS: ()=>{
      console.log('onPressSendSMS');
    },
    onPressBack: ()=>{
      Actions.pop();
    }
  };
}


// definition of container
class ContactDetail extends Component {
  componentDidMount(){
    console.log('Contact Detail', this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <DetailBar
          onPressBack={this.props.onPressBack}
          onPressCall={this.props.onPressCall}
          onPressSendSMS={this.props.onPressSendSMS}/>
        <Detail
          contact={this.props.contact}
          onPressCall={this.props.onPressCall.bind(this)}
          onPressSendSMS={this.props.onPressSendSMS.bind(this)} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
