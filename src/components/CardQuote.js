import React from 'react';

const CardQuote = ({index,ele}) => {
    return (
        <div className='card-quote' index={index}>
            <p>{ele.text}</p>
            <p>{ele.author}</p>
        </div>
    );
}

export default CardQuote;
