import React from 'react';


export default ({Poster, Title, dddd}) => (
    <div className="movie">
        <img src={Poster} alt={Title}/>
        <h3>{Title}</h3>
    </div>
);