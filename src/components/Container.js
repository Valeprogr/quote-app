import "./../App.css"
import React,{useState,useEffect} from "react";
import {getData} from "../services/api";
import Quote from './Quote';
import Loading from './Loading';


function Container() {
  const[quotes, setQuotes]= useState();
  const [quote, setQuote]= useState();

  const[showComp, setShowComp]= useState(false);
  

  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    getData(url).then((data) => setQuotes(prev => data));
    
  }, []);

const getRandomQuote = () =>{
  setQuote(prev => quotes[Math.floor(Math.random() * quotes.length)]);
  setShowComp(true);
}
 
  
  
  return (
    <div className="app-container">
    
    {quotes ?
      <div className='app-box'>
      <h1>Your Random Quote.</h1>
    <button className='btn' onClick={getRandomQuote}>Click  🔍</button>
    {showComp? 
<Quote quote={quote} setShowComp={setShowComp}/>
    :
    null}
      </div>
    :
 <Loading/>}
    
    </div>
  );
}

export default Container;
