import "./search-box.styles.css";

const SearchBox = ({ classname, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${classname}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
