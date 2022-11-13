import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../components/button/Button';
import Modal, { ModalContent } from '../components/modal/Modal';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType } from '../api/tmdbApi';

import './home.scss';
import 'boxicons';


const Home = () => {

  SwiperCore.use([Autoplay]);

  const [ popularMovies, setPopularMovies ] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5466b7f9715fde9407c767ec4cfbdb90&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results.slice(0, 10)))
  }, [])

  const [ trendingMovies, setTrendingMovies ] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=5466b7f9715fde9407c767ec4cfbdb90&language=en-US")
    .then(res => res.json())
    .then(data => setTrendingMovies(data.results.slice(0, 10)))
  }, [])

  return (
    <>
        <div className="poster">
        <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 5000}}
                showsButtons={true}
            >
                {
                    popularMovies.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <SlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="container">
            <div className="section mb-3">
                <div className="trending">
                    <div className="section__header mb-2">
                        <h2>What's Trending?</h2>
                        <div className="section__header__ten">
                            <box-icon name="trending-up" color="white" size="lg" animation="tada"></box-icon>
                        </div>
                    </div>
                        <Swiper
                            grabCursor={true}
                            spaceBetween={10}
                            slidesPerView={'auto'}
                    >
                            {
                                trendingMovies.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="numbers">
                                            <h1>{i + 1}</h1>
                                        </div>
                                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${item.id}`} >
                                            <img src={`https://image.tmdb.org/t/p/w500${item && item.poster_path}`} />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                </div>
                <div className="back">
                        <h1>TOP 10</h1>
                </div>
            </div>
        </div>
    </>
  );
}

const SlideItem = props => {

    let history = useHistory();

    const item = props.item;

    return (
        <div
            className={`slide__item ${props.className}`}
        >
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`} />
            </div>
            <div className="posterImage__overlay">
                <div className="title">{item ? item.original_title: ""}</div>
                <div className="overview">{item.overview}</div>
                <div className="btns">
                    <Link to={`/movie/${item.id}`}>
                        <OutlineButton onClick={() => history.pushState('/movie/' + item.id)}>
                            More Info
                        </OutlineButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Home;