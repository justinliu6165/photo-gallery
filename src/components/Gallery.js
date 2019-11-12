import React from 'react';
import './Gallery.scss';
import {Link} from 'react-router-dom';


function mouseover(e){
    const imgs = document.querySelectorAll('.gallery__item');
    const target = e.target.parentNode.parentNode;

    for(let i = 0; i < imgs.length; i++){
        if(imgs[i] === target) {
            imgs[i].classList.add('gallery__item--active');
        } else {
            imgs[i].classList.remove('gallery__item--active');
        }
    }
}
function mouseleave(){
    const imgs = document.querySelectorAll('.gallery__item');
    for(let i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('gallery__item--active');
    }
}

const Gallery = (props) => {
    return (
        <>
        <h1 className="gallery__title">Gallery</h1>
        <ul className='gallery'>
            {
                props.images.map(image => (
                    <li className='gallery__item' onMouseEnter={mouseover} onMouseLeave={mouseleave} key={image.slug}>
                        <Link to={`/photo/${image.slug}`}>
                            <img src={image.url} alt=""/>
                            <div className="gallery__item-overlay"></div>
                        </Link>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default Gallery;