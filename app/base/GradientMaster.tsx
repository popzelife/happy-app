import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create<Style>({
  gradient: {
    flex: 1,
  },
});

const MasterGradient = ({ children, style }: Props): JSX.Element => (
  <LinearGradient
    colors={['#36ecde', '#2cc7de']}
    start={{ y: 0.25, x: 0.5 }}
    end={{ y: 0.75, x: 0.5 }}
    style={{ ...styles.gradient, ...style }}
  >
    {children}
  </LinearGradient>
);

export interface Style {
  gradient: ViewStyle;
}

export interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export default MasterGradient;
