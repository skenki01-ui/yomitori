import { getResult } from "../data/aura.js";

export default function Result() {
  const type = localStorage.getItem("aura");
  const result = getResult(type);

  const auraColors = {
    red: "#ff3b3b",
    blue: "#3b82ff",
    green: "#22c55e",
    yellow: "#facc15",
    purple: "#a855f7",
    pink: "#ff4fd8",
    white: "#dddddd",
    black: "#222222",
    gold: "#f5c542",
    gray: "#777777",
    rainbow: "#ff66cc",
  };

  const mainColor = auraColors[type] || "#444";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at center, ${mainColor} 0%, #000 75%)`,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 320,
          padding: 24,
          borderRadius: 24,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          boxShadow: `0 0 40px ${mainColor}`,
        }}
      >
        <div
          style={{
            fontSize: 32,
            marginBottom: 10,
          }}
        >
          🔮
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          {result.title}
        </div>

        <div
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            marginBottom: 24,
            whiteSpace: "pre-wrap",
          }}
        >
          {result.lines?.join("\n")}
        </div>

        <div
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            marginBottom: 18,
            opacity: 0.9,
          }}
        >
          もっと深く話したい人へ
          <br />
          <br />
          AIチャット「ひそひそ」で
          <br />
          あなたのオーラや気持ちを
          <br />
          ゆっくり話せます
        </div>

        <a
          href="https://hisohiso.vercel.app"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginBottom: 16,
            color: "#7dd3fc",
            textDecoration: "underline",
            wordBreak: "break-all",
          }}
        >
          https://hisohiso.vercel.app
        </a>

        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "https://hisohiso.vercel.app"
            );
            alert("URLコピーしたよ");
          }}
          style={{
            width: "100%",
            padding: 14,
            border: "none",
            borderRadius: 14,
            background: mainColor,
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          URLをコピー
        </button>
      </div>
    </div>
  );
}