// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { GidGridItem } from './GidGridItem';
// import { getGifs } from '../helpers/getGifs'
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState( [] );

    // useEffect es un hook que nos permite ejecutar cierto codigo de manera condicional
    // El segundo argumento que se manda al useEffect es una lista de dependencias, el cual son las condiciones para
    // que el codigo se vuelva a ejecutar, al dejarla vacia indicamos que solo se ejecutara una vez que se renderice el 
    // componente
    // useEffect( () => {
    //     getGifs( category )
    //     .then( setImages )
    // }, [ category ]);

    // custom hook
    const { data: images, loading } = useFetchGif( category );

    return (
        <>
            <h4 className="animate__animated animate__bounceInDown">{ category }</h4>
            <div className="card-grid">
                {
                    loading && <div className="msg animate__animated animate__bounceInDown">Cargando...</div>
                }
                {
                    (images.length === 0 && !loading)
                        ? (
                            <div className="msg animate__animated animate__bounceInRight">No images found</div>
                        ) : (
                            images.map(img => (
                                <GidGridItem
                                    key={ img.id }
                                    { ...img }
                                />
                            ))
                        )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}