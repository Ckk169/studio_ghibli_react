import React from 'react';

const FlimSelector = ({ flims, onFlimSelect }) => {


    const handleSelect = (event) => {
        const chosenIndex = event.target.value;
        const chosenFlims = flims[chosenIndex];
        onFlimSelect(chosenFlims);

    }

    // const handelChange =(event) => {
    //     const chosenFlim = flims[event.target.value]
    //     onFlimSelect(chosenFlim.url);
    // }

    const filmOptions = flims.map((flim, index) => {

        return <option key={index} value={index}>{flim.title}</option>

    })
    return (
        <>
            <select onChange={handleSelect}>
                <option selcted disabled value=""></option>
                {filmOptions}
            </select>
        </>
    )
}

export default FlimSelector;