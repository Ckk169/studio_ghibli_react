import React from 'react';
import ListItem from './ListItem';

const FavFilm = ({ favs }) => {

    const favFilm = favs.map((fav, index) => {

        return < ListItem film={fav} key={index} />
    })

    return (

        <>
            <ul>
                {favFilm}
            </ul>
        </>
    )

}
export default FavFilm;