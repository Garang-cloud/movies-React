import React from "react";

const MovieList = ({ movies, onViewDetails }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <button onClick={() => onViewDetails(movie)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
// This component is responsible for displaying the list of movies.
// It receives the movies array and a function to handle viewing details of a movie.
// The movies are displayed with their titles and a button to view details.
// The onViewDetails function is called with the selected movie when the button is clicked.
// This allows the parent component to handle the navigation to the details view.
// The MovieList component is a functional component that takes in two props:
// 1. movies: An array of movie objects.
// 2. onViewDetails: A function to handle the action of viewing movie details.
// The component maps over the movies array and renders each movie's title along with a button.