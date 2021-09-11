import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // ******************* Metodo 1 *******************
    // Las variebles o consantes que creemos no son reactivas por lo que su modificacion no va a disparar ningun cambio
    // en el DOM, por lo que cualquier cambio que se quiera hacer en el dom se usa el useState.
    // El useState renderiza todo el componente cada vez que se cambia el valor con el que fue creado, en este caso al usar
    // setCategories react volvera a ejecutar todo lo que hay en la funcion GifExpertApp
    // const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball'];

    // const addCategory = () => {
    //     console.log( categories );
    //     categories.push('Los 7 Pecados Capitales');
    //     console.log( categories );
    // }

    // ******************* Metodo 2 *******************
    const [categories, setCategories] = useState( [ 'ONE PUNCH MAN' ] );

    // const handleAdd = () => {
    //     // setCategories( [ ...categories, 'Los 7 Pecados Capitales' ] );
    //     setCategories( cats => [ 'Los 7 Pecados Capitales', ...cats ] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* ******************* Metodo 1 ******************* */}
            {/* <button onClick={ addCategory }>Agregar</button> */}
            {/* ******************* Metodo 2 ******************* */}
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            {/* ******************* Uso de componente ******************* */}
            <AddCategory categories={ categories } setCategories={ setCategories } />
            <hr/>
            <div className="card-box">
                {
                    // ******************* Metodo 1 *******************
                    // Los ciclos for no son expresiones de js por lo que no podemos usar el for dentro de las llaves
                    // for (let i = 0; i < categories.length; i++) {
                    //     categories[i];
                    // }

                    // La contante no es reactiva por lo que el agregar un elemento al arreglo no se vera en el HTML
                    // categories.map( category => {
                    //     return <li key={ category }>{ category }</li>;
                    // })
                    
                    // ******************* Metodo 2 *******************
                    categories.map( category => {
                        // El atributo key es importante ya que react es la manera en que identifica si el componente cambio
                        // si es uno nuevo o no tiene que hacer el renderizado
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </div>
        </>
    )
}
