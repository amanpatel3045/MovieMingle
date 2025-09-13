import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import dummyMovies from "../components/dummyMovies"; // your movie list

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  // Reviews state
  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState("5");
  const [newText, setNewText] = useState("");

  useEffect(() => {
    const found = dummyMovies.find((m) => m.id === parseInt(id));
    setMovie(found);

    // Initialize with some default reviews
    if (found) {
      setReviews([
        { rating: 5, text: "Amazing movie! Must watch." },
        { rating: 4, text: "Great visuals and story." },
        { rating: 3, text: "Good but a bit confusing." },
      ]);
    }
  }, [id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newText.trim() === "") return;

    setReviews([{ rating: parseInt(newRating), text: newText }, ...reviews]);
    setNewText("");
    setNewRating("5");
  };

  if (!movie)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem", color: "#f8fafc" }}>
        Movie not found.
      </p>
    );

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", color: "#f8fafc" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1rem",
          background: "#1e293b",
          color: "#f8fafc",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "300px", borderRadius: "12px", objectFit: "cover" }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>{movie.title}</h1>
          <p style={{ margin: "0.5rem 0" }}>🎬 Genre: {movie.genre}</p>
          <p style={{ margin: "0.5rem 0" }}>📅 Year: {movie.year}</p>
          <p style={{ margin: "0.5rem 0" }}>⭐ Rating: {movie.rating}</p>
          <p style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            euismod, nisi vel consectetur interdum, nisl nisi dapibus leo, at
            venenatis lorem justo ac sapien.
          </p>

          <h3 style={{ marginTop: "1rem", fontWeight: "600" }}>Cast:</h3>
          <p>Actor 1, Actor 2, Actor 3</p>

          <h3 style={{ marginTop: "1rem", fontWeight: "600" }}>Trailer:</h3>
          <div style={{ margin: "1rem 0" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YoHD9XEInc0"
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            ></iframe>
          </div>

          <h3 style={{ marginTop: "1rem", fontWeight: "600" }}>Reviews:</h3>
          <ul style={{ marginLeft: "1rem", listStyle: "disc" }}>
            {reviews.map((r, idx) => (
              <li key={idx}>
                {"⭐".repeat(r.rating)} {r.text}
              </li>
            ))}
          </ul>

          {/* Add Review Form */}
          <h3 style={{ marginTop: "1rem", fontWeight: "600" }}>
            Add Your Review:
          </h3>
          <form
            onSubmit={handleAddReview}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              background: "#1e293b",
              padding: "1rem",
              borderRadius: "10px",
              marginTop: "0.5rem",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              ⭐ Rating:
              <select
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
                style={{
                  padding: "0.3rem 0.5rem",
                  borderRadius: "6px",
                  border: "none",
                  background: "#0f172a",
                  color: "#f8fafc",
                }}
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </label>

            <textarea
              rows="3"
              placeholder="Write your review..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                background: "#0f172a",
                color: "#f8fafc",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: "none",
                background: "#facc15",
                color: "#0f172a",
                fontWeight: "600",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
