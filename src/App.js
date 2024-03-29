import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState ([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegandoHero
      let originals = list.filter(i=>i.slug ==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }
    loadAll()

  }, []);

  //header scroll change color background
  useEffect (()=> {

    const scrollListner = () => {
      if(window.scrollY > 10) {setBlackHeader(true)} else{setBlackHeader(false)}}
    

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    }

  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }


       <section className="lists">
         {movieList.map((item, key) =>(
           <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
       </section>  

          {movieList.length <= 0 &&
            <div className='loading'>
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
            </div>
          }
    </div>
  );
}

