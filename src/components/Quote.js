import React,{useState} from 'react';


const Quote = ({quote, setShowComp}) => {
  const [favorite, setFavorite]= useState({
 "author": quote.author,
 "text": quote.text

  })

  
 //Save Favorite quotes in LocalStorage
  const saveQuoteHandler = ()=>{
    setFavorite({ author:quote.author, text:quote.text });
    let list = JSON.parse(localStorage.getItem('list')  || '[]');
    list.push(favorite);
    localStorage.setItem('list', JSON.stringify(list))
  
  }

    return (
    <div className='quote-container'>
    <div className='icon'> 
    <a href='/favorites'>
    <span class="material-symbols-outlined heart" onClick={saveQuoteHandler}>
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
