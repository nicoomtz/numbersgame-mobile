import { StyleSheet, TextInput } from "react-native";

import React from "react";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

export default Input;
