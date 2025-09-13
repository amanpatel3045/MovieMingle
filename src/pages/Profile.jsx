import { useState } from "react";
import MovieCard from "../components/MovieCard";
import dummyMovies from "../components/dummyMovies";

function Profile() {
  const [user, setUser] = useState({
    name: "Atul Gupta",
    reviews: [
      { movieId: 1, rating: 5, text: "Amazing!" },
      { movieId: 4, rating: 4, text: "Great visuals!" },
    ],
    watchlist: [2, 3], // movie IDs
  });

  const removeFromWatchlist = (id) => {
    setUser({ ...user, watchlist: user.watchlist.filter((m) => m !== id) });
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "2rem auto", color: "#f8fafc" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem", color: "#facc15" }}>
        {user.name}'s Profile
      </h1>

      {/* Review History */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontWeight: "600", marginBottom: "1rem" }}>Your Reviews</h2>
        {user.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul style={{ listStyle: "disc", marginLeft: "1rem" }}>
            {user.reviews.map((r, idx) => {
              const movie = dummyMovies.find((m) => m.id === r.movieId);
              return (
                <li key={idx}>
                  <strong>{movie?.title}</strong>: {"⭐".repeat(r.rating)} - {r.text}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Watchlist */}
      <section>
        <h2 style={{ fontWeight: "600", marginBottom: "1rem" }}>Your Watchlist</h2>
        {user.watchlist.length === 0 ? (
          <p>Your watchlist is empty.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}>
            {user.watchlist.map((id) => {
              const movie = dummyMovies.find((m) => m.id === id);
              return (
                <div key={id} style={{ position: "relative" }}>
                  <MovieCard movie={movie} />
                  <button
                    onClick={() => removeFromWatchlist(id)}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "#f87171",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.3rem 0.5rem",
                      cursor: "pointer",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Profile;
