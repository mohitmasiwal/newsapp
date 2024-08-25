 import React, { useEffect, useState } from 'react'
 
 const newsItem = () => {
const [news,setnews]=useState([]);

const fetchData = async() => {
let response = await fetch(" https://newsapi.org/v2/everything?q=bitcoin&apiKey=18cffd203e9e478f89904eee983a3787")
let data =  await response.json();
 setnews(data.articles)
}
console.log(news)
useEffect(()=>{
  fetchData();
},[])


   return (
     <div className="card1">
     {
news.map((element, index)=>{
return(
  <>
  <div className="contain">
  <div class=" card text-white bg-dark mb-3 " style={{width: "30rem"}}>
  <img src={element.urlToImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{element.title}</h5>
    <p class="card-text"> {element.description}</p>
    <a href="#" class="btn btn-primary">See More</a>
  </div>
</div>
</div>
  
  
  </>
)
})

     }
     </div>
   )
 }
 
 export default newsItem
 