import React, { useState } from "react";
import { Button, FlatList, StyleSheet, ToastAndroid, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const handleGoalEntered = (enteredText) => {
    setGoal(enteredText);
  };

  const handleAddGoal = () => {
    if (goal.trim().length === 0) {
      ToastAndroid.show("Please Enter a Goal", ToastAndroid.SHORT);
    } else {
      setGoals([...goals, { id: Math.random().toString(), goal }]);
      setGoal("");
      setIsModal(false);
    }
  };
  const handleCancelAddGoal = () => {
    setIsModal(false);
    setGoal("");
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  };
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button title="Add Goal" onPress={() => setIsModal(true)} />
        <GoalInput
          isModal={isModal}
          goal={goal}
          handleGoalEntered={handleGoalEntered}
          handleAddGoal={handleAddGoal}
          handleCancelAddGoal={handleCancelAddGoal}
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={goals && goals}
        style={styles.goalListContainer}
        renderItem={({ item }) => (
          <GoalItem goal={item.goal} id={item.id} onDelete={handleDeleteGoal} />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: "aliceblue",
  },

  goalListContainer: {
    width: "100%",
    margin: 2,
  },
});
