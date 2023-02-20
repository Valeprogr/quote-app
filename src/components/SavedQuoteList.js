import React,{useState, useEffect} from 'react';
import CardQuote from './CardQuote';

const SavedQuoteList = () => {
const [data, setData] = useState();
console.log(data)

    const getFavoritesQuote = () =>{
        const items = JSON.parse(localStorage.getItem('list'));
        setData(items)
    }
    
 useEffect(() => {
getFavoritesQuote()
 }, []);
    return (
        <>
            <h1>This is my saved Quote List!</h1>
            <br/>
            {
                data ?
               <>
                    {data.map((ele,index) =>(<CardQuote index={index} ele={ele}/>))}
            </>
                
                :
                <p>There are no Favorite Quotes Saved...</p>
            }
        </>
    );
}

export default SavedQuoteList;
