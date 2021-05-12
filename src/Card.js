import React from 'react';
import './index.css';

function Card(props){
    return(
        <>
            <div className='cards'>
                <img src={props.moviePoster} alt='MoviePoster' className='card_img'/>
                <div className='card_info'>
                    <span className='card_category'>{props.genre}</span>
                    <h3 className='card_title'>{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <button >Add to cart</button>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Card;