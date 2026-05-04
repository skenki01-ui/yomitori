function count(tags) {
  const map = {};
  tags.forEach(t => {
    map[t] = (map[t] || 0) + 1;
  });
  return map;
}

export function getResultFromTags(tags) {
  const c = count(tags);

  // 🌈 レア（条件：タグがバラけてる）
  if (Object.keys(c).length >= 5) {
    return {
      title: "虹のオーラ",
      lines: [
        "変化の真っ只中です",
        "安定していません",
        "人生の分岐点にいます"
      ]
    };
  }

  if ((c.attack || 0) >= 2) {
    return {
      title: "赤のオーラ",
      lines: [
        "感情が強く出ています",
        "衝動的になっています",
        "冷静さが必要です"
      ]
    };
  }

  if ((c.calm || 0) >= 2) {
    return {
      title: "青のオーラ",
      lines: [
        "考えすぎています",
        "慎重すぎる状態です",
        "動けていません"
      ]
    };
  }

  if ((c.defense || 0) >= 2) {
    return {
      title: "黒のオーラ",
      lines: [
        "自分を守っています",
        "距離を取っています",
        "本音を隠しています"
      ]
    };
  }

  if ((c.recovery || 0) >= 2) {
    return {
      title: "緑のオーラ",
      lines: [
        "回復しています",
        "安定に向かっています",
        "休むことが必要です"
      ]
    };
  }

  if ((c.stop || 0) >= 2) {
    return {
      title: "灰のオーラ",
      lines: [
        "停滞しています",
        "迷っています",
        "動けていません"
      ]
    };
  }

  if ((c.emotion || 0) >= 2) {
    return {
      title: "ピンクのオーラ",
      lines: [
        "感情が揺れています",
        "人に影響されています",
        "優しすぎる状態です"
      ]
    };
  }

  if ((c.sensitive || 0) >= 1) {
    return {
      title: "紫のオーラ",
      lines: [
        "直感が強いです",
        "影響を受けやすいです",
        "繊細な状態です"
      ]
    };
  }

  if ((c.awaken || 0) >= 1) {
    return {
      title: "金のオーラ",
      lines: [
        "覚醒しています",
        "気づきが増えています",
        "変化を受け入れています"
      ]
    };
  }

  // デフォルト（白）
  return {
    title: "白のオーラ",
    lines: [
      "安定しています",
      "バランスが取れています",
      "落ち着いた状態です"
    ]
  };
}