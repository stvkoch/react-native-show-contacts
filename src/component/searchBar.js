
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
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }
  onChangeSearchBar(text) {
    this.setState({text});
    this.props.onPressSearchBar(this.state.text);
  }
  onPressCleanTextInput() {
    this.onChangeSearchBar('');
  }
  render() {
    const imageSearchButton = require('../assets/imgs/ic_search_white.png');
    const imageCleanButton = require('../assets/imgs/ic_close_white.png');
    return (
      <View style={styles.searchBar}>
        <TextInput style={styles.searchBarText}
          onChangeText={this.onChangeSearchBar.bind(this)}
          _onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
          placeHolder="Filter..."
          underlineColorAndroid='white'
        />
        <TouchableHighlight
          onPress={this.onPressCleanTextInput.bind(this)}
          style={styles.searchBarBtn}
          >
          <Image
            source={this.state.text ? imageCleanButton : imageSearchButton}
            style={styles.searchBarImage}
          />
        </TouchableHighlight>
      </View>
    );
  }

}

  export default SearchBar;
