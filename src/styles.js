
import React, {
  StyleSheet
} from 'react-native';


import COLORS_SCHEMA from './colors';

// containers
const container = {
  backgroundColor: COLORS_SCHEMA.NEUTRAL,
  flex: 1
};
const navBar = {
  flexDirection: 'row',
  padding: 12,
  paddingTop: 7,
  paddingBottom: 7,
  backgroundColor: COLORS_SCHEMA.PRIMARY,
};
const navBarBtn = {
  flex: 1,
  opacity: 1,
}
const navBarImage = {
  width: 40,
  height: 40,

};
const header = {};
const footer = {};
const center = {
    justifyContent: 'center',
    alignItems: 'center',
};

// buttons
const btn = {};
const btnOK = {};
const btnCancel = {};

//list and rows
const list = {
};
const row = {
  backgroundColor: COLORS_SCHEMA.NEUTRAL,
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: COLORS_SCHEMA.DIVIDER,
  borderStyle: 'dotted',
  padding: 10,
  paddingBottom: 12,
  paddingTop: 12,
};
const rowImg = {
  flex: 1,
  opacity: 0.5,
};
const rowImgSelect = {
  opacity: 1,
}
const rowIco = {
  backgroundColor: COLORS_SCHEMA.ACCENT,
  width: 40,
  height: 40,
}
const rowImageIco = {
  width: 40,
  height: 40,
}
const rowText = {
  flex: 5
};


// for searchBar
const searchBar = {
  ...navBar,
}
const searchBarText = {
  flex: 6,
  color: COLORS_SCHEMA.TEXT_ICONS,
  fontSize: 20,
  padding: 3,
};
const searchBarBtn = {
  ...navBarBtn
};
const searchBarImage = {
  ...navBarImage,
}

// for contact list items
const rowFamilyName = {};
const rowGivenName = {};
const familyName = {
  color: '#777',
};
const givenName = {
    fontSize: 20,
    color: COLORS_SCHEMA.TEXT_SECUNDARY,

};

// for detail
const detailContactImage = {
  position: 'relative'
}
const detailImage = {
  position: 'absolute',
}
const detailContactName = {}


export default styles = StyleSheet.create({
  container,
  navBar,
  navBarBtn,
  navBarImage,
  header,
  footer,
  btn,
  btnOK,
  btnCancel,
  list,
  familyName,
  givenName,
  row,
  rowImg,
  rowIco,
  rowImageIco,
  rowText,
  rowGivenName,
  rowFamilyName,
  searchBar,
  searchBarText,
  searchBarBtn,
  searchBarImage,
  detailContactImage,
  detailImage,
  detailContactName,
});
