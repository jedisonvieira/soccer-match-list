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
 
  const [betList, setBetList] = useState([]);




  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Soccer match scores</Text>
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
