import {StatusBar} from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font";
import {colors} from "./constants/colors";
import {padding} from "./constants/padding";
import {data} from "./data"
import ItemCard from "./components/itemCard";
import ListItemSeparator from "./components/ListItemSeparator";

export default function App() {
  const [fontLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  return fontLoaded ? (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <FlatList
        style={styles.listContainer}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => (
          <ItemCard
            title={item.title}
            description={item.description}
            color={item.color}
            Logo={item.logo}
          />
        )}
      />

    </SafeAreaView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,

    paddingHorizontal: padding.HORIZONTAL_SCREEN,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: padding.HORIZONTAL_SCREEN,
    marginTop:8
  }
});