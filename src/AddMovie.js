const AddMovie = ({ setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAdd = () => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Poster URL"
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Rating"
        onChange={(e) => setNewMovie({ ...newMovie, rating: +e.target.value })}
      />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
};
