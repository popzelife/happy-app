import React from 'react';
import { StyleSheet, ViewStyle, ImageStyle, Image } from 'react-native';

import GradientMaster from 'app/base/GradientMaster';

/**
 * You should not use custom font here
 */

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 230,
    height: 230,
  },
});

const Splash = () => (
  <GradientMaster style={styles.container}>
    <Image source={require('app/assets/Logo.png')} style={styles.logo} />
  </GradientMaster>
);

export interface Style {
  container: ViewStyle;
  logo: ImageStyle;
}

export default Splash;
