export default function Home() {
  return (
    <div style={{
      height: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ marginBottom: 20 }}>
        あなたの深層を暴く
      </h1>

      <button
        onClick={() => window.location.hash = "/q"}
        style={{
          padding: "12px 24px",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "8px"
        }}
      >
        診断を始める
      </button>
    </div>
  );
}