import React,{useState, useEffect} from 'react';
import CardQuote from './CardQuote';

const SavedQuoteList = () => {
const [data, setData] = useState();
//console.log(data)

    const getFavoritesQuote = () =>{
        const items = JSON.parse(localStorage.getItem('list'));
        setData(items)
    }
    
 useEffect(() => {
getFavoritesQuote()
 }, []);
    return (
        <>
            <div className='reload'>
            <h1 className='list-header'>This is my saved Quotes List!</h1>
            <br/>
            
            <span className="material-symbols-outlined reload-icon" onClick={getFavoritesQuote}>
                cached
            </span>
            </div>
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
