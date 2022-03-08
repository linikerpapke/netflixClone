import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+' ...';
    }


    return(
        <section className="featured" style={
            {
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }
        }>

            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.original_name}</div>
                    <div className="featured--info"> 
                        <div className="featured--points">{item.vote_avarege} Pontos</div>
                        <div className="featured--year"> 2022 </div>
                        <div className="featured--season"> {item.number_of_seasons} Temporada{item.number_of_seasons !==1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description"> {description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">▷ Assistir</a>
                        <a href="" className="featured--mylistbutton">➕ Minhas Lista</a>
                    </div>
                    <div className="featured--genres"> Generos: </div>
                
                </div>
            </div>

        </section>
    );

}