import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
import React from "react";
import {colors} from "./constants/colors";
import {radius} from "./constants/radius";
import {padding} from "./constants/padding";
import {margin} from "./constants/margin";


const CARD_PADDING = 20;
export default function App() {

  const [fontLoaded] = useFonts({
    "Inter-Regular": require('./assets/fonts/Inter-Regular.ttf'),
    "Inter-Bold": require('./assets/fonts/Inter-Bold.ttf'),
  })
  if (!fontLoaded) return null;
  return fontLoaded ? (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={[styles.card, {backgroundColor: colors.VIOLET}]}>
        <View style={styles.cardContent}/>
      </View>
      <View style={[styles.card, {backgroundColor: colors.GREY}]}></View>
      <View style={[styles.card, {backgroundColor: colors.PURPLE}]}></View>
      <View style={[styles.card, {backgroundColor: colors.ORANGE}]}></View>
      <View style={[styles.card, {backgroundColor: colors.DARK}]}></View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: padding.HORIZONTAL_SCREEN
  },
  card: {
    width: '100%',
    height: '15%',
    borderWidth: 1,
    marginVertical: margin.VERTICAL_SEPARATOR,
    borderRadius: radius.MEDIUM,
    padding: CARD_PADDING,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    borderRadius: radius.MEDIUM,
    backgroundColor: colors.LIGHT
  }
});
