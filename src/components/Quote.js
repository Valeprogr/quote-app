import React from 'react';

const Quote = ({quote}) => {
    
    return (
    <div className='quote-container'>
    <p className='quote'>{quote.text}</p>
      <p className='author'><em>{quote.author}</em></p>
        </div>
    );
}

export default Quote;
