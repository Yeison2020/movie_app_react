import Movies from "./components/Movies";
import { useEffect, useState } from "react";

const FeatureAPI =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(SEARCH_API + search);
      setSearch("");
    }
  };

  const getMovies = (API) => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getMovies(FeatureAPI);
  }, []);

  return (
    <>
      {" "}
      <header>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleOnChange(e)}
          />
        </form>
      </header>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((data) => <Movies key={data.id} {...data} />)}
      </div>
    </>
  );
}

export default App;
