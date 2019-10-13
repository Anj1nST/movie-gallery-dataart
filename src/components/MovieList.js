import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        props.state.map(movie => < Movie key={movie.id} data={movie} />)
    )
}


export default MovieList;