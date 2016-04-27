
import React, {
  StyleSheet
} from 'react-native';


import COLORS_SCHEMA from './colors';

// containers
const container = {
  flex: 1,
};
const navBar = {
  flexDirection: 'row',
  padding: 12,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: COLORS_SCHEMA.PRIMARY,
};
const navBarBtn = {
  flex: 1,
  opacity: 1,
}
const navBarTitle = {
  color: COLORS_SCHEMA.NEUTRAL,
  fontSize: 20,
  marginTop: 5,
  flex: 7,
};
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
}
const detailContactNumber = {
  borderBottomColor: COLORS_SCHEMA.PRIMARY,
  padding: 20,
};
const detailImage = {
  margin: 10,
  alignSelf: 'center',
  flex: 1,
  opacity: 0.5,
}
const detailContactName = {
  fontSize: 20,
}
const detailCommands = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  flexDirection: 'row',
};
const circle = {
  width: 60,
  height: 60,
}
const bnt = {
  margin: 40,
  padding: 20,
  borderRadius: 100,
  flex: 1,
}
const callBnt = {
  ...bnt,
  backgroundColor: 'green',
};
const smsBnt = {
  ...bnt,
  backgroundColor: COLORS_SCHEMA.ACCENT,
};

const card = {
  margin: 10,
  backgroundColor: COLORS_SCHEMA.NEUTRAL,

};
const cardItem = {};

export default styles = StyleSheet.create({
  container,
  navBar,
  navBarBtn,
  navBarImage,
  navBarTitle,
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
  detailCommands,
  detailContactNumber,
  card,
  cardItem,
  callBnt,
  smsBnt,
  circle,
});
