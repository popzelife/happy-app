import React from 'react';
import { StyleSheet, View, ViewStyle, ImageStyle, Image } from 'react-native';

import GradientMaster from 'app/base/GradientMaster';

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 230,
    height: 230,
  },
});

const Home = (): JSX.Element => (
  <GradientMaster style={styles.container}>
    <View style={styles.logo}>
      <Image source={require('app/assets/Logo.png')} style={styles.logo} />
    </View>
  </GradientMaster>
);

export interface Style {
  container: ViewStyle;
  logo: ImageStyle;
}

export default Home;
