import React from 'react';


const Quote = ({quote, setShowComp}) => {
  

    return (
    <div className='quote-container'>
    <div className='icon'> 
    <a href='/favorites'>
    <span class="material-symbols-outlined heart">
favorite
</span> </a>

    <span class="material-symbols-outlined close" onClick={()=>setShowComp(false)}>
close
</span>
</div>

    <p className='quote'>{quote.text}</p>
      <p className='author'><em>{quote.author}</em></p>
        </div>
    );
}

export default Quote;
