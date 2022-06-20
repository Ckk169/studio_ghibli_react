import React, { useEffect, useState } from 'react';
import FlimSelector from '../components/FlimSelector';
import FlimDetail from '../components/FlimDetail';
import FavFilm from '../components/FavFilm';
import Header from '../components/Header';

const StudioContainer = () => {

    // const [searchText, setSearchText] = useState('');
    const [sgFlims, setSgFlims] = useState([]);
    const [selectedSgFlim, setSelectedSgFlim] = useState(null);
    const [favFilm, setFavFilm] = useState([]);

    useEffect(() => {
        getFlims();
    }, [])

    const getFlims = function () {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(flims => setSgFlims(flims))
    };

    // const handleFlimSelect = (url) => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(flims => setSelectedSgFlim(flims))
    // };

    const onFlimSelect = (flim) => {
        setSelectedSgFlim(flim);
    }

    const saveFavFilm = function () {
        const copyFav = [...favFilm]
        copyFav.push(selectedSgFlim)
        setFavFilm(copyFav);
    }


    return (
        <>

            <Header title=" Studio Ghibli Flims" />
            <FlimSelector flims={sgFlims} onFlimSelect={onFlimSelect} />
            {selectedSgFlim ? <FlimDetail selectedSgFlim={selectedSgFlim} saveFavFilm={saveFavFilm} /> : null}
            <FavFilm favs={favFilm} />
        </>
    )
}

export default StudioContainer;