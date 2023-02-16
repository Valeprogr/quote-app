export const getData = async (url) =>{
    try{
        const result = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);
        return result
    }catch(error){
        console.log(error)
    }
}

//getData(url);