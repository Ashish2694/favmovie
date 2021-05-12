import React from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import movieData from './movieData';

let movieCard=(val)=>{
    return(
        <Card
        moviePoster={val.moviePoster}
        genre={val.genre}
        title={val.title}
        link={val.link}
        />
    )
   
}
function App() {
  return (
   <>
        <Header/>
       <div class="container">
           {movieData.map(movieCard)};
        
      </div>
      <Footer/>
   
   </>
  );
}

export default App;
