import React from 'react';

const Movie = (props) => {
    const image = `https://image.tmdb.org/t/p/w342${props.data['poster_path']}`
    return (
        <div>
            <h3>{props.data.title}</h3>
            <img src={image} alt={props.data.title} id={props.id} onClick={props.onClick} />
        </div>
    )
}

export default Movie;