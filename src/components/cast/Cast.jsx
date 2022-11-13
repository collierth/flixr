import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const Cast = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);
    const [crews, setCrews] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCast();
    }, [category, props.id]);

    return (
            <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
            </div>
    );
}

export default Cast;