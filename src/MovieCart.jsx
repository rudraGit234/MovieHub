import React from "react";

const MovieCart = ({ movie }) => {
    return (
        <div className="movie" onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(movie.Title + " film")}`, '_blank')}>


            {/* <div className="movie"> */}
            < div >
                <p>{movie.Year}</p>
            </div >
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div >
    )
}

export default MovieCart;