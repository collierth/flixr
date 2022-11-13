import React from 'react';

import './similar.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path);

    return (
        <Link to={link}>
            <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            </div>
        </Link>
    );
}

export default MovieCard;