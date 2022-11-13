import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';

import './detail.scss';

import MovieList from '../components/movie-list/MovieList';
import button, { OutlineButton } from '../components/button/Button';
import Cast from '../components/cast/Cast';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="outer">
                            <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
                            </div>
                        </div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                
                            </div>
                            <div className="movie-content__info">
                                <div className="rating">
                                    <h1>{item.vote_average.toFixed(1)}</h1>
                                </div>
                                <div className="main">
                                    <h1 className="title">
                                        {item.title || item.name}
                                    </h1>
                                    <h3 className="rd">
                                        {item.release_date.substring(0,4)}
                                    </h3>
                                </div>
                                <h4 className="subtitle">
                                    {item.tagline}
                                </h4>
                                <p className="overview">{item.overview}</p>
                                <h3>{item.runtime} mins</h3>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name} | </span>
                                        ))
                                    }
                                </div>
                                <div className="cast">
                                    <div className="section__header">
                                        Starring: 
                                    </div>
                                    <Cast id={item.id}/>
                                </div>
                                <div className="button">
                                        <OutlineButton>
                                            Add to My List
                                        </OutlineButton>
                                </div>
                            </div>
                        </div>
                        <div className="bottom mb-3">
                        <h2>You Might like...</h2>
                            <MovieList category={category} type="similar" id={item.id}/>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;