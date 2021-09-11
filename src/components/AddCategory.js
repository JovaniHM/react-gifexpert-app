import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, setCategories }) => {
    const [inputValue, setInputValue] = useState( '' );

    const handleValue = ( e ) => setInputValue( e.target.value.toUpperCase() );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            if ( categories.some( cat => cat === inputValue.trim() ) ) {
                console.log( 'Key ya existe' );
                return;
            }

            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue( '' );
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired,
}