
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import {openContactsFromLocal} from '../action/contacts';
import Spinner from 'react-native-spinkit';


function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        opening: state.opening
    };
}

function mapDispatchToProps(dispatch) {
  return {
    openContacts: function () {
      return dispatch(openContactsFromLocal());
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});
class Splash extends Component {
  componentDidMount(){
    this.props.openContacts();
  }
  renderSpinner() {
    console.log('show spinner');
    return (
      <View style={styles.container}>
        <Spinner
          size={50}
          type={'ThreeBounce'}/>
      </View>
    );
  }
  renderRow(row) {
    return (<View>
        <Text style={styles.welcome}>
          {row.givenName}
        </Text>
        <Text style={styles.welcome}>
          {row.familyName}
        </Text>
      </View>)
  }
  renderList() {
    let dataSource = ds.cloneWithRows([]);
    if (this.props.contacts && this.props.contacts.length) {
      dataSource = ds.cloneWithRows(this.props.contacts);
    }
     return (
      <View style={styles.container}>
        <ListView
          pageSize={25}
          renderRow={this.renderRow}
          dataSource={dataSource}/>
      </View>
     );
  }
  render() {
      if (this.props.opening) {
        return this.renderSpinner();
      }
      return this.renderList();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
