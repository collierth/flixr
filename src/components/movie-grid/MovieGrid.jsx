import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import MovieCard from '../movie-card/MovieCard';

import './movie-grid.scss';

import Button, { OutlineButton } from '../button/Button';
import tmdbApi, { category, movieType, tvType} from '../../api/tmdbApi';
import Input from '../input/Input';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                }
                } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
                    response = await tmdbApi.getMoviesList(movieType.popular, {params});
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
    <div className="max">
        <h1>Movies</h1>
        <div className="movie-grid">
            {
                items.map((movieReq) => <MovieCard key={movieReq.id} {...movieReq}/>
                )
            }
        </div>
        {
            page < totalPage ? (
                <div className="movie-grid__loadmore" >
                    <OutlineButton className="small" onClick={loadMore}>See More</OutlineButton>
                </div>
            ) : null
        }
    </div>
    )
}

export default MovieGrid;