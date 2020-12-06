import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GoalItem = ({ goal, onDelete, id }) => {
  return (
    <TouchableOpacity underlayColor="green" onPress={() => onDelete(id)}>
      <View style={styles.goal}>
        <Text style={{ color: "white" }}>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 6,
    backgroundColor: "blue",
    color: "white",
    marginBottom: 2,
  },
});

export default GoalItem;
