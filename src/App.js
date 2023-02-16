import './App.css';
import React,{useState,useEffect} from "react";
import {getData} from "./services/api";
import Loading from './components/Loading';
import Quote from './components/Quote';
function App() {
  const[quotes, setQuotes]= useState();
  const [quote, setQuote]= useState();

  const[showComp, setShowComp]= useState(false);
  
  //console.log(quotes)
 //console.log(getRandomNumber(quotes))

  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    getData(url).then((data) => setQuotes(prev => data));
    
  }, []);

const getRandomQuote = () =>{
  setQuote(prev => quotes[Math.floor(Math.random() * quotes.length)]);
  setShowComp(true);
}
 
  
  
  return (
    <div className="App">
    {quotes ?
      <>
    <h1>hello</h1>
    <button onClick={getRandomQuote}>Click</button>
    {showComp? 
<Quote quote={quote}/>
    :
    null}
      </>
    :
 <Loading/>}
    
    </div>
  );
}

export default App;
