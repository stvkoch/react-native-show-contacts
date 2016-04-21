
import React, {
  StyleSheet
} from 'react-native';


const COLORS_SCHEMA = {
  NEUTRAL: '#FFFFFF',
  DARK_PRIMARY: '#C2185B',
  PRIMARY: '#E91E63',
  LIGHT_PRIMARY: '#F8BBD0',
  TEXT_ICONS: '#FFFFFF',
  ACCENT: '#536DFE',
  TEXT_PRIMARY: '#536DFE',
  TEXT_SECUNDARY: '#727272',
  DIVIDER: '#B6B6B6'
};

// containers
const container = {
  backgroundColor: COLORS_SCHEMA.NEUTRAL,
  flex: 1
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
  flexDirection: 'row',
  padding: 12,
  paddingTop: 7,
  paddingBottom: 7,
  backgroundColor: COLORS_SCHEMA.PRIMARY
}
const searchBarText = {
  flex: 5,
  color: COLORS_SCHEMA.TEXT_ICONS,
  fontSize: 20,
  padding: 3,
};
const searchBarBtn = {
  flex: 1
};
const searchBarImage = {
  width: 40,
  height: 40,
  margin: 7,
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

export default styles = StyleSheet.create({
  container,
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
});
