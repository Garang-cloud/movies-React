const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}
export default MovieList;
// This component is responsible for displaying a list of movies.
// It takes a prop called movies, which is an array of movie objects.
// It maps over the movies array and renders a div for each movie.
// Each div contains the movie's title and release date.