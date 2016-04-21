import React, {
  AppRegistry
} from 'react-native';
import StatusBarAndroid from 'react-native-android-statusbar';

import Lellol from './src/lellol';
import COLORS_SCHEMA from './src/colors';

StatusBarAndroid.setHexColor(COLORS_SCHEMA.DARK_PRIMARY);

AppRegistry.registerComponent('sendSMS', () => Lellol );
