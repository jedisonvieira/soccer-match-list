import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [teamOne, setTeamOne] = useState("");
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwo, setTeamTwo] = useState("");
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const [betList, setBetList] = useState([]);

  const clearFields = () => {
    setTeamOne("");
    setTeamTwo("");
    setTeamOneScore(0);
    setTeamTwoScore(0);
  };
  const addMatchScore = () => {
    if (teamOne && teamTwo && teamOneScore && teamTwoScore) {
      setBetList((currentList) => [
        ...currentList,
        {
          id: Date.now(),
          teamOne: teamOne,
          teamTwo: teamTwo,
          teamOneScore: teamOneScore,
          teamTwoScore: teamTwoScore,
        },
      ]);
      clearFields();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Soccer match scores</Text>
      </View>
      <View style={styles.scoreBoard}>
        <TextInput
          value={teamOne}
          placeholder="Team One"
          style={styles.teamInput}
          onChangeText={(team) => setTeamOne(team)}
        ></TextInput>
        <TextInput
          placeholder="0"
          value={teamOneScore}
          keyboardType="numeric"
          style={styles.scoreInput}
          onChangeText={(score) => setTeamOneScore(score)}
        ></TextInput>
        <Text>X</Text>
        <TextInput
          placeholder="0"
          value={teamTwoScore}
          keyboardType="numeric"
          style={styles.scoreInput}
          onChangeText={(score) => setTeamTwoScore(score)}
        ></TextInput>
        <TextInput
          value={teamTwo}
          placeholder="Team Two"
          style={styles.teamInput}
          onChangeText={(team) => setTeamTwo(team)}
        ></TextInput>
        <Button title="Place bet" onPress={addMatchScore}></Button>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {betList.map(
            ({ id, teamOne, teamOneScore, teamTwo, teamTwoScore }) => {
              return (
                <KeyboardAvoidingView
                  key={id}
                  behavior="height"
                  style={styles.betList}
                >
                  <Text style={styles.betTeam}>{teamOne}</Text>
                  <Text style={styles.betScore}>{teamOneScore}</Text>
                  <Text> X </Text>
                  <Text style={styles.betScore}>{teamTwoScore}</Text>
                  <Text style={styles.betTeam}>{teamTwo}</Text>
                </KeyboardAvoidingView>
              );
            }
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  headerText: {
    fontSize: 24,
  },
  scoreBoard: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  teamInput: {
    margin: 2,
    padding: 6,
    borderWidth: 1,
    borderColor: "black",
    width: "35%",
  },
  scoreInput: {
    margin: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: "red",
    width: "10%",
  },
  body: { flex: 5 },
  betList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  betTeam: {
    fontSize: 24,
    color: "lightblue",
    fontWeight: "bold",
  },
  betScore: {
    fontSize: 32,
    color: "red",
    margin: 14,
  },
});
