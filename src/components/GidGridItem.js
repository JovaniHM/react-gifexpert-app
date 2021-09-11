import React from 'react'

export const GidGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__bounceInRight">
            <center>
                <img src={ url } alt={ title } />
            </center>
            <p>{ title }</p>
        </div>
    )
}
