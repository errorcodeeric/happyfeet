let jsonBin = "https://api.jsonbin.io/v3/b/65662ba712a5d37659a03ed3";

async function getData(){
    let result = await axios.get(jsonBin);
    return result.data.record;
}

document.addEventListener("DOMContentLoaded", async function() 
{
    places = await getData();
    dropMarker(places);
    

})
