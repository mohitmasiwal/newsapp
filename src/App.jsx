import  React from 'react'
 
import './App.css'
import NewsItem from './component/newsItem'
import News from './component/News'
import Navbar from './component/Navbar'

function App() { 

  return (
    <div >

   <Navbar/> 
    <News/>
    <NewsItem  />
    
     
    </div>
  )
}

export default App
