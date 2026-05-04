import { useState } from "react";

// シャッフル
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// 10問（ここで固定）
const baseQuestions = [
  {
    text: "人に否定されたら？",
    options: [
      { text: "言い返す", type: "attack" },
      { text: "気にしない", type: "calm" },
      { text: "引きずる", type: "sensitive" }
    ]
  },
  {
    text: "予定が空いたら？",
    options: [
      { text: "誰か誘う", type: "emotion" },
      { text: "1人で過ごす", type: "recovery" },
      { text: "何もしない", type: "stop" }
    ]
  },
  {
    text: "疲れてる時は？",
    options: [
      { text: "閉じこもる", type: "defense" },
      { text: "無理して動く", type: "attack" },
      { text: "ぼーっとする", type: "white" }
    ]
  },
  {
    text: "新しいことを始める時は？",
    options: [
      { text: "すぐやる", type: "attack" },
      { text: "調べる", type: "calm" },
      { text: "迷う", type: "stop" }
    ]
  },
  {
    text: "人といるときは？",
    options: [
      { text: "合わせる", type: "emotion" },
      { text: "距離を取る", type: "defense" },
      { text: "自然体", type: "white" }
    ]
  },
  {
    text: "ストレスが溜まると？",
    options: [
      { text: "爆発する", type: "attack" },
      { text: "我慢する", type: "defense" },
      { text: "寝る", type: "recovery" }
    ]
  },
  {
    text: "決断するときは？",
    options: [
      { text: "直感", type: "sensitive" },
      { text: "論理", type: "calm" },
      { text: "保留", type: "stop" }
    ]
  },
  {
    text: "恋愛では？",
    options: [
      { text: "尽くす", type: "emotion" },
      { text: "距離を取る", type: "defense" },
      { text: "冷静", type: "calm" }
    ]
  },
  {
    text: "今の自分は？",
    options: [
      { text: "成長中", type: "awaken" },
      { text: "安定", type: "white" },
      { text: "停滞", type: "stop" }
    ]
  },
  {
    text: "直感は？",
    options: [
      { text: "信じる", type: "sensitive" },
      { text: "疑う", type: "calm" },
      { text: "無視", type: "defense" }
    ]
  }
];

// 結果ロジック（完全版）
function getResult(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top1 = sorted[0]?.[0];
  const top2 = sorted[1]?.[0];

  // レア
  if (Math.random() < 0.05) return "rainbow";

  if (top1 === "attack") return "red";
  if (top1 === "calm") return "blue";
  if (top1 === "defense") return "black";
  if (top1 === "recovery") return "green";
  if (top1 === "stop") return "gray";
  if (top1 === "emotion") return "pink";
  if (top1 === "sensitive") return "purple";
  if (top1 === "awaken") return "gold";

  return "white";
}

export default function Question() {
  const [questions] = useState(shuffle(baseQuestions));
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({});

  const q = questions[index];

  function answer(type) {
    const newScores = {
      ...scores,
      [type]: (scores[type] || 0) + 1
    };

    // ランダム揺らぎ
    if (Math.random() < 0.3) {
      newScores.awaken = (newScores.awaken || 0) + 1;
    }

    if (index + 1 >= questions.length) {
      const result = getResult(newScores);
      localStorage.setItem("aura", result);
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