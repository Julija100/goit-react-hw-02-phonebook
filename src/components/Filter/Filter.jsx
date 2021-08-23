import style from '../Filter/Filter.module.css'

const Filter = ({ onFilterChange }) => {
  return (
    <label>
      <p className={style.filterLitleTitle}>Find contacts by name:</p>
      <input
        className={style.filterInput}
        type="text"
        onChange={onFilterChange}
      />
    </label>
  );
};
export default Filter;