// packages
import React, {
  Component,
} from 'react-native';
import { connect } from 'react-redux';

//style
import styles from '../styles';

// components
import Detail from '../component/detail';

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
    }
  };
}


// definition of container
class ContactDetail extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <Detail
        contact={this.props.contact}
        onPressCall={this.props.onPressCall.bind(this)}
        onPressSendSMS={this.props.onPressSendSMS.bind(this)} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
