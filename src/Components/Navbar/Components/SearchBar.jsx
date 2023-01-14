import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="d-flex ">
      <input className="searchInput" placeholder="  search for product,goods" />
      {/* <button className="search-icon">
        <BiSearch />
      </button> */}
    </div>
  );
}

export default SearchBar;
