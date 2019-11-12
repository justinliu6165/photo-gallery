import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FetchSingleImage } from '../../js/api';
import './ImagePage.scss';
import backArrow from '../assets/left-arrow.svg';

const ImagePage = (props) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        FetchSingleImage(props.match.params)
        .then(data => {
            setImage(data);
        })
    }, []);
    return image ? (
        <div className="photo">
            <div className="photo__single">
                <img src={image.data[0].image.data.full_url} />
            </div>
            <Link to="/" className="photo__back-btn"><img src={backArrow}/></Link>
        </div>
    ) : null
}
export default ImagePage;