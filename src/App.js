import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentView, setCurrentView] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setCurrentView("details");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  return (
    <div>
      {currentView === "home" && (
        <>
          <AddMovie setMovies={setMovies} />
          <MovieList movies={movies} onViewDetails={handleViewDetails} />
        </>
      )}
      {currentView === "details" && (
        <MovieDetails movie={selectedMovie} onBack={handleBackToHome} />
      )}
    </div>
  );
};

export default App;
