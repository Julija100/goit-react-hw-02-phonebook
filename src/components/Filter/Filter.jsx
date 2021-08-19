const Filter = ({ onFilterChange }) => {
  return (
    <label>
      <p>Find contacts by name:</p>
      <input type="text" onChange={onFilterChange} />
    </label>
  );
};
export default Filter;