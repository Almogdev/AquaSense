<<<<<<< HEAD
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

async function post(path) {
  const res = await fetch(`${API_BASE}${path}`, { method: "POST" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json().catch(() => ({}));
}

export default function App() {
  const handle = async (path) => {
    try {
      await post(path);
      console.log("sent:", path);
    } catch (e) {
      console.error("request failed:", e.message);
      alert("Server error / not reachable");
    }
  };

=======
export default function App() {
>>>>>>> c286ca386c0d0df12b0feec5aabdda4cd244e455
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>AquaSense</h1>

      <div style={styles.grid}>
<<<<<<< HEAD
        <button style={styles.btn} onClick={() => handle("/api/modes/weather")}>
          Weather Mode
        </button>

        <button style={styles.btn} onClick={() => handle("/api/modes/soil")}>
          Soil Moisture Mode
        </button>

        <button style={styles.btn} onClick={() => handle("/api/modes/manual")}>
          Manual Mode
        </button>

        <button style={styles.btn} onClick={() => handle("/api/modes/scheduled")}>
          Scheduled Mode
        </button>
=======
        <button style={styles.btn}>Weather Mode</button>
        <button style={styles.btn}>Soil Moisture Mode</button>
        <button style={styles.btn}>Manual Mode</button>
        <button style={styles.btn}>Scheduled Mode</button>
>>>>>>> c286ca386c0d0df12b0feec5aabdda4cd244e455
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
<<<<<<< HEAD
    gridTemplateColumns: "repeat(2, 300px)",
    gap: 30,
  },
  btn: {
    height: 140,
    borderRadius: 20,
    border: "3px solid #222",
    background: "white",
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 700,
=======
    gridTemplateColumns: "repeat(2, 150px)",
    gap: 20,
  },
  btn: {
    height: 100,
    borderRadius: 16,
    border: "2px solid #222",
    background: "white",
    cursor: "pointer",
>>>>>>> c286ca386c0d0df12b0feec5aabdda4cd244e455
  },
};
