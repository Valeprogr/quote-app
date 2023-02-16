import React from 'react';

const Quote = ({quote}) => {
    
    return (
    <div className='quote-container'>
    <p>{quote.text}</p>
      <p>{quote.author}</p>
        </div>
    );
}

export default Quote;
