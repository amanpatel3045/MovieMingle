import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  // LocalStorage se watchlist load karna
useEffect(() => {
  const updateWatchlist = () => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  };

  // Page mount pe load
  updateWatchlist();

  // Listen for localStorage changes (from other tabs/components)
  window.addEventListener("storage", updateWatchlist);

  return () => {
    window.removeEventListener("storage", updateWatchlist);
  };
}, []);


  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#facc15",
        }}
      >
        ⭐ My Watchlist
      </h2>

      {watchlist.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#94a3b8" }}>
          Your watchlist is empty. Add some movies!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
