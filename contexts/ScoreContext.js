import { createContext, useState } from "react";

export const ScoreContext = createContext({
  scoreList: [],
  addMatchScore: (score) => {},
  setScores: (scores) => {},
 
});
export const ScoreContextProvider = ({ children }) => {
    const [scoreList, setScoreList] = useState([]);
  
    console.log(scoreList);
  
    const addMatchScore = (score) => {
     
      setScoreList((currentList) => [...currentList, score]);
    };
    const setScores = (scores) => setScoreList(scores);
  
    return (
      <ScoreContext.Provider value={{ scoreList, addMatchScore, setScores}}>
        {children}
      </ScoreContext.Provider>
    );
  };
