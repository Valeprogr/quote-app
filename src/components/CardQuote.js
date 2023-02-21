import React from 'react';

const CardQuote = ({index,ele}) => {

    //Delete Quote function
    const deleteItem = () =>{
        console.log(index)
       let arrList = JSON.parse(localStorage.getItem('list'))
        arrList.splice(index,1);
        console.log(arrList)
      localStorage.setItem("list", JSON.stringify(arrList));
    
    }
    return (
       
            <div className='card-quote' index={index}>
            <div className='icon'>
            <span className="material-symbols-outlined close" onClick={deleteItem} >
                close
            </span>
            </div>
            <p className='quote'>{ele.text}</p>
            <p className='author'>{ele.author}</p>
        </div>
    );
}

export default CardQuote;
