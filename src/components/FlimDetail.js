import React from 'react';

const FlimDetail = ({ selectedSgFlim, saveFavFilm }) => {



    return (
        <>
            <h2>{selectedSgFlim.title}</h2>
            <div className="FlimCard">
                <img src={selectedSgFlim.image} alt={selectedSgFlim.title} />
            </div>
            <input type='submit' value="Add Fav Film" onClick={saveFavFilm} />



        </>
    )
}

export default FlimDetail;