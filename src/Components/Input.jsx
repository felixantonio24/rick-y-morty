import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="form-input">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Ingrese un número del 1 al 126.... "
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
export default SearchInput