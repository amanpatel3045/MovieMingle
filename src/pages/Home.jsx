import React from "react";
import MovieCard from "../components/MovieCard";

const featuredMovies = [
  { id: 1, title: "Inception", year: 2010, rating: 4.8, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg" },
  { id: 2, title: "Interstellar", year: 2014, rating: 4.6, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" },
  { id: 3, title: "The Matrix", year: 1999, rating: 4.7, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
  { id: 4, title: "Avatar", year: 2009, rating: 4.5, genre: "Action", poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg" },
];

const trendingMovies = [
  { id: 1, title: "Inception", year: 2010, rating: 4.8, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg" },
  { id: 2, title: "Interstellar", year: 2014, rating: 4.6, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" },
  { id: 3, title: "The Matrix", year: 1999, rating: 4.7, genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
  { id: 4, title: "Avatar", year: 2009, rating: 4.5, genre: "Action", poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg" },
];

function Home() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#facc15",
        }}
      >
        Welcome to MovieMingle 🎬
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#cbd5e1",
          marginBottom: "2rem",
        }}
      >
        Discover trending movies, write reviews, and build your watchlist.
      </p>

      {/* Featured Movies */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "#38bdf8",
          }}
        >
          🌟 Featured Movies
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "#f43f5e",
          }}
        >
          🔥 Trending Now
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
