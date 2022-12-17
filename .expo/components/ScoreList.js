import { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert, KeyboardAvoidingView, Text } from "react-native";
import { ScoreContext } from "../../contexts/ScoreContext";
import { findAllScores } from "../../services/ScoreAPI";



const ScoreList = () => {
    const scoreContext = useContext(ScoreContext);

    useEffect(() => {
        const findAll = async () => {
            try {
                const response = await findAllScores();
                console.log("resposta listagem" + response.data)
                scoreContext.setScores(response.data);
            } catch (e) {
                console.log("erro na busca" + e)
                Alert.alert("Erro", "Erro ao carregar lista de placares");
            }
        };
        findAll();
    }, []);

    return (
        <View style={styles.body}>
            <Text style={styles.textDivisor}>________________________________________________________</Text>
            <ScrollView>
                {scoreContext.scoreList.map(
                    (score) => {
                        return (
                            <KeyboardAvoidingView
                                key={score.id}
                                behavior="height"
                                style={styles.betList}
                            >
                                <Text style={styles.betTeam}>{score.teamOne}</Text>
                                <Text style={styles.betScore}>{score.teamOneScore}</Text>
                                <Text> X </Text>
                                <Text style={styles.betScore}>{score.teamTwoScore}</Text>
                                <Text style={styles.betTeam}>{score.teamTwo}</Text>
                            </KeyboardAvoidingView>
                        );
                    }
                )}
            </ScrollView>
        </View>);

};
const styles = StyleSheet.create({
    body: {
        flex: 5,
        marginTop: "10%"
    },
    betList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    betTeam: {
        fontSize: 26,
        color: "darkkhaki",
        fontWeight: "bold",
    },
    betScore: {
        fontSize: 32,
        fontFamily: "sans-serif",
        color: "darkkhaki",
        fontWeight: "bold",
        margin: 14,
    },
    textDivisor: {
        color: "darkkhaki",
        alignItems: "center",
        textAlign: "center"
    }

});

export default ScoreList;