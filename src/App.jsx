import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import CharList from "./components/CharList/CharList";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState(null);
  const [stat, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [pageSize, setPageSize] = useState(20);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${stat}&gender=${gender}&species=${species}${debouncedSearch ? `&name=${debouncedSearch}` : ""}`;
        const response = await fetch(api);

        if (!response.ok) {
          if (response.status === 404) {
            setCharacters([]);
            setInfo(null);
            setError("No characters found!");
          } else {
            throw new Error("Failed to fetch data from the server.");
          }
        } else {
          const data = await response.json();
          setCharacters(data.results.slice(0, pageSize));
          setInfo(data.info);
        }
      } catch (error) {
        setCharacters([]);
        setInfo(null);
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, debouncedSearch, stat, gender, species, pageSize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Rick and Morty</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      
      {loading && debouncedSearch && <div className="loading-text text-center">Loading...</div>}
      
      {error && <div className="alert alert-danger text-center">{error}</div>}
      
      <div className="row">
        <Filter
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          selectedStatus={stat}
          selectedGender={gender}
          selectedSpecies={species}
          updatePageSize={setPageSize}
          pageSize={pageSize}
        />
        
        <div className="centered-container">
          <CharList characters={characters} />
        </div>
      </div>
      
      <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
    </div>
  );
}

export default App;
