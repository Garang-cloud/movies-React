const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
