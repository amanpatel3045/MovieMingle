import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import dummyMovies from "../components/dummyMovies";

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const filteredMovies = dummyMovies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre ? movie.genre === genre : true) &&
      (year ? movie.year.toString() === year : true) &&
      (rating ? movie.rating >= parseFloat(rating) : true)
    );
  });
  const navigate = useNavigate();
const toggleWatchlist = (movie) => {
  // Existing watchlist ko localStorage se load karo
  const stored = JSON.parse(localStorage.getItem("watchlist")) || [];

  const exists = stored.find((m) => m.id === movie.id);
  let updated;

  if (exists) {
    // Remove from watchlist
    updated = stored.filter((m) => m.id !== movie.id);
  } else {
    // Add to watchlist
    updated = [...stored, movie];
  }

  // State aur localStorage dono update karo
  setWatchlist(updated);
  localStorage.setItem("watchlist", JSON.stringify(updated));
};


  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#0f172a",
        minHeight: "100vh",
        color: "#f8fafc",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#facc15",
        }}
      >
        🎬 Browse Movies
      </h2>

      {/* Filters Section */}
      <div
        style={{
          background: "#1e293b",
          padding: "1.5rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1",
            minWidth: "220px",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            background: "#0f172a",
            color: "#f8fafc",
          }}
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: "none",
            minWidth: "150px",
            fontSize: "1rem",
            background: "#0f172a",
            color: "#f8fafc",
          }}
        >
          <option value="">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Drama">Drama</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: "none",
            minWidth: "150px",
            fontSize: "1rem",
            background: "#0f172a",
            color: "#f8fafc",
          }}
        >
          <option value="">All Years</option>
          <option value="1999">1999</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2014">2014</option>
          <option value="2016">2016</option>
          <option value="2019">2019</option>
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: "none",
            minWidth: "150px",
            fontSize: "1rem",
            background: "#0f172a",
            color: "#f8fafc",
            height: "auto",
          }}
        >
          <option value="">All Ratings</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>

      {/* Movies Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id}>
              <div
                onClick={() => navigate(`/movie/${movie.id}`)}
                style={{ cursor: "pointer" }}
              >
                <MovieCard movie={movie} />
              </div>

              {/* Watchlist Button */}
              <button
                onClick={() => toggleWatchlist(movie)}
                style={{
                  marginTop: "0.5rem",
                  width: "100%",
                  padding: "0.5rem 0",
                  borderRadius: "6px",
                  border: "none",
                  background: watchlist.find((m) => m.id === movie.id)
                    ? "#f87171"
                    : "#10b981",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {watchlist.find((m) => m.id === movie.id)
                  ? "Remove from Watchlist"
                  : "Add to Watchlist"}
              </button>
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#94a3b8",
            }}
          >
            ❌ No movies found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default Movies;
