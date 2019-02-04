
const Movies = {
    title:'a',
    director:'b',
    rating: 4.5,
    releaseYear: 2018
};

showProperties(Movies);

function showProperties(obj){
  for(let key in obj) 
   // console.log(key);
    if(typeof obj[key] === 'string')
    console.log(key, obj[key]);
}