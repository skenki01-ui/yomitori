import { getResult } from "../data/aura";

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

        <p style={{ marginTop: 20 }}>
          このままだと少しずつズレていく可能性があります
        </p>

        <button
          onClick={() =>
            (window.location.href = "https://hisohisoのURL")
          }
          style={{
            marginTop: 20,
            padding: 10,
            borderRadius: 8,
          }}
        >
          この状態について相談する
        </button>

        {/* シェア誘導 */}
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 12 }}>
            この結果、誰かに見せてみて
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