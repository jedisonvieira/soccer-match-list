import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useContext, useState } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";
import { addNewScore } from "../../services/ScoreAPI";

const ScoreInput = () => {
    const scoreContext = useContext(ScoreContext);
    const [teamOne, setTeamOne] = useState("");
    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwo, setTeamTwo] = useState("");
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    const addMatchScore = async () => {
        if (teamOne && teamTwo && teamOneScore && teamTwoScore) {
            const newScore = {
                teamOne: teamOne,
                teamTwo: teamTwo,
                teamOneScore: teamOneScore,
                teamTwoScore: teamTwoScore,
            };
            try {
                const { data: newScoreCreated } = await addNewScore(newScore);
                scoreContext.addMatchScore(newScoreCreated);
                clearFields();
            } catch (e) {
                Alert.alert("Erro", "Erro ao salvar novo placar da partida");
            }

        } else{
            Alert.alert("Erro", "Favor preencher todos os campos");
        }
    };
    const clearFields = () => {
        setTeamOne("");
        setTeamTwo("");
        setTeamOneScore(0);
        setTeamTwoScore(0);
    };

    return (
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
           <View>
            <Button title="Place bet" onPress={addMatchScore} color="darkkhaki" borderColor="black" ></Button>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    scoreBoard: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"5%",
     
    },
    teamInput: {
        margin: 2,
        padding: 6,
        borderWidth: 2,
        borderColor: "darkkhaki",
        width: "35%",
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        fontSize:16
        
    },
  
    scoreInput: {
        flex: 1,
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        color:"white",
        margin: 4,
        padding: 8,
        borderWidth: 1,
        borderColor:"darkkhaki",
        textAlign:"center",
        fontSize: 24,
        backgroundColor: "darkkhaki",
       
    },
});

export default ScoreInput;