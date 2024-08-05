import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A thief who steals corporate secrets through the use of dream-sharing technology.' },
        { title: 'Titanic', genre: 'Drama', details: 'A love story that unfolds on the ill-fated Titanic.' },
        { title: 'The Dark Knight', genre: 'Action', details: 'Batman faces the Joker in Gotham City.' }
    ]);

    const [showActionMovies, setShowActionMovies] = useState(false);

    const toggleDetails = (index) => {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    };

    const toggleView = () => {
        setShowActionMovies(!showActionMovies);
    };

    const displayedMovies = showActionMovies ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div className="movies-list">
            <button className="toggle-view-button" onClick={toggleView}>
                {showActionMovies ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {displayedMovies.map((movie, index) => (
                    <li key={index}>
                        <div onClick={() => toggleDetails(index)}>
                            {movie.title}
                            {movie.showDetails && <p>{movie.details}</p>}
                        </div>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
