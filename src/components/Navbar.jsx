import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#1e293b",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
    }}>
      <h2 style={{ color: "#38bdf8" }}>MovieMingle 🎬</h2>
      <div>
        <Link to="/" style={{ margin: "0 1rem", color: "#f8fafc" }}>Home</Link>
        <Link to="/movies" style={{ margin: "0 1rem", color: "#f8fafc" }}>Movies</Link>
        <Link to="/watchlist" style={{ margin: "0 1rem", color: "#f8fafc" }}>
          Watchlist
        </Link>
        <Link to="/profile" style={{ margin: "0 1rem", color: "#f8fafc" }}>Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
