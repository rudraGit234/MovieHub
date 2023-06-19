import React from "react"
import { useEffect, useState } from "react"
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCart from "./MovieCart"
import { mockComponent } from "react-dom/test-utils"


// d7838acf api key

// const API_URL = "http://www.omdbapi.com/?apikey=[d7838acf]"
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d7838acf"


//This is the static data to test out the render our jsx
const movie1 =
{
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}


const App = () => {

    const [movies, SetMovies] = useState([])
    const [searchTerm, SetSearchterm] = useState("")


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        SetMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("The Batman")
    }, [])


    return (
        <div className="app">
            <h1>MovieHub</h1>
            <div className="search">
                {/* These are madatory 3 things for input */}
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => SetSearchterm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCart movie={movie} />

                            ))}
                            {/* //this movies is the main movies array from setstate */}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>

                        </div>

                    )

            }


        </div>
    )
}

export default App