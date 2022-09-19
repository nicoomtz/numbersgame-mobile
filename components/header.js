import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "Lato-Bold",
  },
});

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
