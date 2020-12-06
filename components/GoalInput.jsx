import React from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";
import AddButton from "./AddButton";

const GoalInput = ({
  goal,
  handleGoalEntered,
  handleCancelAddGoal,
  isModal,
  handleAddGoal,
}) => {
  return (
    <Modal
      visible={isModal}
      animationType="slide"
      style={{ backgroundColor: "blue" }}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your name"
          style={styles.textInput}
          value={goal}
          onChangeText={handleGoalEntered}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <AddButton
            color="red"
            title="Cancel"
            eventHandler={handleCancelAddGoal}
          />

          <AddButton eventHandler={handleAddGoal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    width: "80%",
    borderWidth: 1,
    padding: 5,
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
  },
});
export default GoalInput;
