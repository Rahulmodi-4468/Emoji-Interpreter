import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐ฎโโ๏ธ": "Police officer",
  "๐ต๏ธโโ๏ธ": "Detective",
  "๐โโ๏ธ": "Guard",
  "๐ทโโ๏ธ": "Construction Worker",
  "๐จโโ๏ธ": "Health Worker",
  "๐จโ๐": "Student",
  "๐จโ๐ซ": "Teacher",
  "๐จโโ๏ธ": "Judge",
  "๐จโ๐พ": "Farmer",
  "๐จโ๐ณ": "Cook",
  "๐จโ๐ง": "Mechanic",
  "๐จโ๐ญ": "Factory Worker",
  "๐จโ๐ผ": "Office Worker",
  "๐จโ๐ฌ": "Scientist",
  "๐จโ๐ป": "Technologist",
  "๐จโ๐ค": "Singer",
  "๐จโ๐จ": "Artist",
  "๐จโโ๏ธ": "Pilot",
  "๐จโ๐": "Astronaut",
  "๐จโ๐": "Fire Fighter",
  "๐ฆธโโ๏ธ": "Super Hero",
  "๐ฆนโโ๏ธ": "Super Villain",
  "๐งโโ": "Vampire"
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
