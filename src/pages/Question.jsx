import { useState } from "react";

const questions = [
  {
    text: "人に否定されたら？",
    options: [
      { text: "言い返す", type: "red" },
      { text: "気にしない", type: "blue" },
      { text: "引きずる", type: "purple" }
    ]
  },
  {
    text: "予定が空いたら？",
    options: [
      { text: "誰か誘う", type: "pink" },
      { text: "1人で過ごす", type: "green" },
      { text: "何もしない", type: "gray" }
    ]
  },
  {
    text: "疲れてる時は？",
    options: [
      { text: "閉じこもる", type: "black" },
      { text: "無理して動く", type: "red" },
      { text: "ぼーっとする", type: "white" }
    ]
  }
];

export default function Question() {
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({});

  const q = questions[index];

  function answer(type) {
    const newScores = {
      ...scores,
      [type]: (scores[type] || 0) + 1
    };

    if (index + 1 >= questions.length) {
      let main = Object.keys(newScores).sort(
        (a, b) => newScores[b] - newScores[a]
      )[0];

      // レア虹
      if (Math.random() < 0.05) {
        main = "rainbow";
      }

      localStorage.setItem("aura", main);
      window.location.hash = "/result";
      return;
    }

    setScores(newScores);
    setIndex(index + 1);
  }

  return (
    <div style={{
      height: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: 280,
        padding: 20,
        background: "#111",
        borderRadius: 16,
        textAlign: "center"
      }}>
        <h3>{q.text}</h3>

        {q.options.map(o => (
          <button
            key={o.text}
            onClick={() => answer(o.type)}
            style={{
              display: "block",
              width: "100%",
              marginTop: 10,
              padding: 10,
              borderRadius: 8,
              border: "none"
            }}
          >
            {o.text}
          </button>
        ))}
      </div>
    </div>
  );
}