import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../components/button/Button';
import Modal, { ModalContent } from '../components/modal/Modal';

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
        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${item.id}`} >
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`} />
            </div>
            <div className="posterImage__overlay">
                <div className="title">{item ? item.original_title: ""}</div>
                <div className="overview">{item.overview}</div>
                <div className="btns">
                    <Button onClick={() => history.pushState('/movie/' + item.id)}>
                        More Info
                    </Button>
                    <OutlineButton>
                        Watch Trailer
                    </OutlineButton>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default Home;