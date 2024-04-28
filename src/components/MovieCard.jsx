import placeholder from "../assets/placeholder.png";

const MovieCard = ({
  imageUrl,
  title,
  languages = [],
  countries = [],
  genres = [],
}) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card" style={{ minHeight: "1000px" }}>
        <img
          src={imageUrl ?? placeholder}
          alt={title}
          className="card-img-top w-100"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="mb-2">
            <p className="card-text">Languages</p>
            <div className="d-flex gap-2 flex-wrap">
              {languages.map((lang) => (
                <span key={lang + title} className="badge text-bg-primary">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="card-text">Countries</p>
            <div className="d-flex gap-2 flex-wrap">
              {countries.map((country) => (
                <span key={country + title} className="badge text-bg-secondary">
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="card-text">Genre</p>
            <div className="d-flex gap-2 flex-wrap">
              {genres.map((genre) => (
                <span key={genre + title} className="badge text-bg-success">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
