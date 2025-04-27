import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Mind-bending thriller",
      posterURL: "inception.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Space adventure",
      posterURL: "interstellar.jpg",
      rating: 5,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
  );

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
