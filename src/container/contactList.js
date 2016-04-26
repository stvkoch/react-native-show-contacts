// packages
import React, {
  Component,
  View,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";


//actions
import { openContactsFromLocal } from '../action/contacts';
import { addFilter } from '../action/filter'
//style
import styles from '../styles';

//components
import Row from '../component/row';
import Spin from '../component/spin';
import SearchBar from '../component/searchBar';



const getFilteredContacts = (contacts, filterTxt) => {
  if (!filterTxt)
    return contacts;

  filterTxt = filterTxt.trim();

  return contacts.filter((c)=>{
    return (
      typeof c.givenName === 'string'
            &&
      c.givenName.toLowerCase().indexOf(filterTxt)>-1
    )||(
      typeof c.familyName === 'string'
            &&
      c.familyName.toLowerCase().indexOf(filterTxt)>-1
    );
  })
}

// react-redux
const mapStateToProps = (state) => {
    return {
        contacts: getFilteredContacts(state.contacts, state.filter),
        opening: state.opening,
        filter: state.filter
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openContacts: ()=>{
      return dispatch(openContactsFromLocal());
    },
    openDetailContact: (contact)=>{
      console.log('contactID', contact);
      Actions.ContactDetail({ contact: contact });
    },
    filterContacts: (txt) => {
      dispatch(addFilter(txt));
      console.log('filter contacts', txt);
    }
  };
}

// data source used by ListView
const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

// definition of container
class ContactList extends Component {
  componentDidMount(){
    this.props.openContacts();
  }

  // when
  renderSpinner() {
      return (
        <Spin />
    );
  }

  renderRow(row) {
    return (<Row row={row} onPressOpenDetail={this.props.openDetailContact} />)
  }

  renderList() {
    let dataSource = ds.cloneWithRows([]);

    if (this.props.contacts && this.props.contacts.length) {
      dataSource = ds.cloneWithRows(this.props.contacts);
    }
     return (
      <View style={styles.container}>
        <SearchBar onPressSearchBar={this.props.filterContacts}/>
        <ListView
          style={styles.list}
          pageSize={25}
          renderRow={this.renderRow.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
