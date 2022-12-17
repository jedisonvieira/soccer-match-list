
import { View, StyleSheet,Text } from "react-native";
import { ScoreContextProvider } from "../../contexts/ScoreContext";
import ScoreInput from "./ScoreInput";
import ScoreList from "./ScoreList";

const ScoreMatches = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>World Cup Scores</Text>
    </View>
    <ScoreContextProvider>
        <ScoreInput/>
        <ScoreList/>
    </ScoreContextProvider>
  </View>
  );
};

export default ScoreMatches;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "mistyrose"
      },
      header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "goldenrod",
      },
      headerText: {
        fontSize: 38,
        fontWeight: "bold",
        fontFamily:"sans-serif",
        color:'ghostwhite'
      }
});
