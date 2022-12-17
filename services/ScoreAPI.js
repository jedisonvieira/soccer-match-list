import axios from "axios";

const  baseURL=  'http://192.168.0.109:3000/matches'


export const findAllScores = async () => {
  console.log("Iniciando busca de partidas")
  return await axios.get(baseURL);
};

export const addNewScore = async (score) => {
  console.log("my new score" + score.teamOne)
  return await axios.post(baseURL, score);
};
