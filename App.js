import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import GameScreen from "./screens/game";
import Header from "./components/header";
import StartGameScreen from "./screens/start-game";
import { colors } from "./constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
  });
  const title = !userNumber ? "Adivina un número" : "Comienza el juego";

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}
