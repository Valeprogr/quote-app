import React from 'react';

const Quote = ({quote, setShowComp}) => {
    
    return (
    <div className='quote-container'>
    <div className='icon'>   
    <span class="material-symbols-outlined" onClick={()=>setShowComp(false)}>
close
</span></div>

    <p className='quote'>{quote.text}</p>
      <p className='author'><em>{quote.author}</em></p>
        </div>
    );
}

export default Quote;
