import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Card from "../components/card";
import NumberContainer from "../components/number-container";
import { colors } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    height: 200,
    marginTop: 20,
    marginHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "70%",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

const GameScreen = ({ selectedNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 100, selectedNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Suposición del oponente</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button title="MENOR" color={colors.primary} onPress={() => null} />
          <Button title="MAYOR" color={colors.secondary} onPress={() => null} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
