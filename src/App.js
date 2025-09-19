
import { useState } from "react";
import './App.css';

function App() {
  // users choice
  const [choice, setChoice] = useState(null);
  // ai choice
  const [aiChoice, setAiChoice] = useState(null);
  // result text
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setChoice(userChoice);
    
  const ai = Math.floor(Math.random()* 3);
    setAiChoice(ai);



    if (userChoice === ai) {
      setResult("tie");

   } else if 
   (
   (userChoice === 0 && ai === 1) ||
   (userChoice === 1 && ai === 0) ||
   (userChoice === 2 && ai === 1)
  ){
    setResult("Win");
  } else {
    setResult("lose");
  }
  };

     return (
          <div className="App">
        <h1>Play Rock, Paper, Scissors </h1>

        <p>What's your choice?</p>
        <button onClick={() => play(0)}>Rock</button>
        <button onClick={() => play(1)}>Paper</button>
        <button onClick={() => play(2)}>Scissors</button>
         </div>
  );
}

export default App;
