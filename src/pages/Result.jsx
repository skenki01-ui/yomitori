import { getResult } from "../data/aura.js";

export default function Result() {
  const type = localStorage.getItem("aura");
  const result = getResult(type);

  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 300,
          padding: 20,
          background: "#111",
          borderRadius: 16,
          textAlign: "center",
        }}
      >
        <h2>あなたの現在のオーラ</h2>

        <h3>{result.title}</h3>

        {result.lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}

        {/* 不安→誘導 */}
        <p style={{ marginTop: 20 }}>
          このままだと少しずつズレていく可能性があります
        </p>

        <p style={{ fontSize: 12 }}>
          でも原因ははっきりしています
        </p>

        {/* ひそひそ誘導 */}
        <button
          onClick={() =>
            (window.location.href = "https://hisohiso.vercel.app")
          }
          style={{
            marginTop: 20,
            padding: 12,
            borderRadius: 8,
            border: "none",
            background: "#fff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          この状態について相談する
        </button>

        {/* 拡散導線（強化版） */}
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 12 }}>
            これ、結構当たってるんだけど
          </p>

          <p style={{ fontSize: 12 }}>
            これ当たってるか見てほしい
          </p>

          <p style={{ fontSize: 12 }}>
            同じタイプの人いる？
          </p>

          <p
            style={{
              fontSize: 12,
              marginTop: 5,
              wordBreak: "break-all",
              color: "#aaa",
            }}
          >
            https://yomitori.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
}