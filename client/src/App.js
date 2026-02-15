export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>AquaSense</h1>

      <div style={styles.grid}>
        <button style={styles.btn}>Weather Mode</button>
        <button style={styles.btn}>Soil Moisture Mode</button>
        <button style={styles.btn}>Manual Mode</button>
        <button style={styles.btn}>Scheduled Mode</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui",
    background: "#f4f6f8",
  },
  title: {
    marginBottom: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 150px)",
    gap: 20,
  },
  btn: {
    height: 100,
    borderRadius: 16,
    border: "2px solid #222",
    background: "white",
    cursor: "pointer",
  },
};
