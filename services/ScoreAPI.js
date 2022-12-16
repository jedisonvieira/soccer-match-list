import axios from "axios";

const apiUrl = "http://10.0.2.2:3000/matches";

export const findAllScores = async () => {
  return await axios.get(apiUrl);
};

export const addNewScore = async (score) => {
  return await axios.post(apiUrl, score);
};
