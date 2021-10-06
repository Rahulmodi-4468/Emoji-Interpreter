import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👮‍♂️": "Police officer",
  "🕵️‍♂️": "Detective",
  "💂‍♂️": "Guard",
  "👷‍♂️": "Construction Worker",
  "👨‍⚕️": "Health Worker",
  "👨‍🎓": "Student",
  "👨‍🏫": "Teacher",
  "👨‍⚖️": "Judge",
  "👨‍🌾": "Farmer",
  "👨‍🍳": "Cook",
  "👨‍🔧": "Mechanic",
  "👨‍🏭": "Factory Worker",
  "👨‍💼": "Office Worker",
  "👨‍🔬": "Scientist",
  "👨‍💻": "Technologist",
  "👨‍🎤": "Singer",
  "👨‍🎨": "Artist",
  "👨‍✈️": "Pilot",
  "👨‍🚀": "Astronaut",
  "👨‍🚒": "Fire Fighter",
  "🦸‍♂️": "Super Hero",
  "🦹‍♂️": "Super Villain",
  "🧛‍♂": "Vampire"
};

export default function App() {
  const [meaning, setMeaning] = useState(null);

  const symbolArray = Object.keys(emojiDictionary);

  const inputChangeHandler = (event) => {
    const emoji = event.target.value;
    const meaning = emojiDictionary[emoji];

    if (!meaning) {
      setMeaning("Oops! This one seems out of Directory");
    } else {
      setMeaning(`${emoji} - ${meaning}`);
    }

    if (emoji === "") setMeaning(null);
  };

  const clickEmojiHandler = (emoji) => {
    setMeaning(`${emoji} : ${emojiDictionary[emoji]}`);
  };

  return (
    <div className="App">
      <h1 style={{ color: "#f8f8f8" }}>Emoji Interpreter</h1>
      <h2>Symbols and their meanings!</h2>
      <input onChange={inputChangeHandler} />

      <h2>{meaning ? meaning : "Enter a symbol to intepret its meaning"}</h2>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "0.5rem",
          padding: "0.5rem 0.5rem"
        }}
      >
        {symbolArray.map((item) => {
          return (
            <span
              style={{ margin: "1rem", fontSize: "xx-large" }}
              onClick={() => clickEmojiHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
