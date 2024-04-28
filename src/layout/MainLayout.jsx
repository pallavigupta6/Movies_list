import { useState, useMemo } from "react";
import MovieCard from "../components/MovieCard";
import data from "../data/movies-filter-react.json";
import languages from "../data/language.json";
import countries from "../data/countries.json";
import genres from "../data/genre.json";

const MainLayout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = useMemo(() => {
    // Filter movies based on selected criteria
    return data.filter((movie) => {
      const hasLanguage =
        selectedLanguage === "" ||
        movie.movielanguages.includes(selectedLanguage);
      const hasCountry =
        selectedCountry === "" ||
        movie.moviecountries.includes(selectedCountry);
      const hasGenre =
        selectedGenre === "" || movie.moviegenres.includes(selectedGenre);
      return hasLanguage && hasCountry && hasGenre;
    });
  }, [data, selectedLanguage, selectedCountry, selectedGenre]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setSelectedLanguage(name === "language" ? value : selectedLanguage);
    setSelectedCountry(name === "country" ? value : selectedCountry);
    setSelectedGenre(name === "genre" ? value : selectedGenre);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <div className="col-12 d-flex justify-content-between">
            <div className="col-3">
              <select
                className="form-select"
                aria-label="Filter by language"
                name="language"
                value={selectedLanguage}
                onChange={handleFilterChange}
              >
                <option value="">Languages</option>
                {languages.map((lang, index) => (
                  <option key={index} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <select
                className="form-select"
                aria-label="Filter by country"
                name="country"
                value={selectedCountry}
                onChange={handleFilterChange}
              >
                <option value="">Countries</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <select
                className="form-select"
                aria-label="Filter by genre"
                name="genre"
                value={selectedGenre}
                onChange={handleFilterChange}
              >
                <option value="">Genres</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.movietitle}
                imageUrl={movie.moviemainphotos[0]} // Assuming only one main photo for simplicity
                title={movie.movietitle}
                languages={movie.movielanguages}
                countries={movie.moviecountries}
                genres={movie.moviegenres}
              />
            ))
          ) : (
            <p>No movies found matching your filters.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
