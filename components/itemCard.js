import {View, StyleSheet} from "react-native";
import {colors} from "../constants/colors";
import {TextM, TextXL} from "./text";
import {radius} from "../constants/radius";
import {margin} from "../constants/margin";

const CARD_PADDING = 14;

export default function ItemCard({color, Logo, title, description}) {
  return (
    <View style={[styles.card, {backgroundColor: color}]}>
      <View style={styles.cardContent}>
        <Logo width={50} height={50} color={color}/>
        <View style={styles.textContainer}>
          <TextXL color={colors.PURPLE}>{title}</TextXL>
          <TextM>{description}</TextM>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 140,
    borderWidth: 1,
    borderRadius: radius.MEDIUM,
    padding: CARD_PADDING,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    borderRadius: radius.MEDIUM,
    backgroundColor: colors.LIGHT,
    alignItems: "center",
    padding: CARD_PADDING,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    height: "100%",
    paddingLeft: CARD_PADDING,
    justifyContent: "space-evenly"
  },
})