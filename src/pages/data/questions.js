export const emotionQuestion = {
  text: "今のあなたに一番近い状態は？",
  options: [
    { text: "余裕がある", value: "good" },
    { text: "少し疲れている", value: "tired" },
    { text: "正直しんどい", value: "bad" },
    { text: "何も感じていない", value: "none" }
  ]
};

export const questions = [
  {
    text: "暗い部屋で音がしたら？",
    options: [
      { text: "確認する", type: "red" },
      { text: "無視する", type: "blue" },
      { text: "逃げる", type: "black" }
    ]
  },
  {
    text: "人に否定されたら？",
    options: [
      { text: "言い返す", type: "red" },
      { text: "気にしない", type: "green" },
      { text: "引きずる", type: "purple" }
    ]
  },
  {
    text: "予定が空いたら？",
    options: [
      { text: "誰か誘う", type: "yellow" },
      { text: "一人で過ごす", type: "blue" },
      { text: "何もしない", type: "black" }
    ]
  },
  {
    text: "秘密を持つなら？",
    options: [
      { text: "隠し通す", type: "black" },
      { text: "誰かに話す", type: "yellow" },
      { text: "状況で変える", type: "green" }
    ]
  },
  {
    text: "恋愛での距離感は？",
    options: [
      { text: "近づく", type: "red" },
      { text: "様子を見る", type: "blue" },
      { text: "離れる", type: "black" }
    ]
  },
  {
    text: "直感と理性どっち？",
    options: [
      { text: "直感", type: "purple" },
      { text: "理性", type: "blue" },
      { text: "状況次第", type: "green" }
    ]
  },
  {
    text: "人に合わせる？",
    options: [
      { text: "合わせる", type: "white" },
      { text: "合わせない", type: "red" },
      { text: "疲れる", type: "purple" }
    ]
  }
];

// ランダム5問抽出
export function getRandomQuestions() {
  return [...questions]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
}