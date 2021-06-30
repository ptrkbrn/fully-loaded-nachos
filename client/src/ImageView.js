import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import ImageContainer from './ImageContainer';

function ImageView(props) {
    console.log(props.images);
    let [currentImage, setCurrentImage] = useState(props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0]);
    let [relatedImages, setRelatedImages] = useState(props.images.filter(image => image.text === currentImage.text && image.timestamp !== currentImage.timestamp))
    let location = useLocation();
    let history = useHistory();
    useEffect(() => {
        setCurrentImage(props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0]);
    }, [location]);
    useEffect(()=> {
        setRelatedImages((props.images.filter(image => image.text === currentImage.text && image.timestamp !== currentImage.timestamp)));
    }, [currentImage]);
    return (
        <div>
            <Link to="/">Back to search</Link>
            <h1>IMAGE VIEW!!</h1>
            <div>
                <img src={currentImage.url} />
                <p contentEditable>{currentImage.text}</p>
            </div>
            <ImageContainer images={relatedImages} />
        </div>
    )
}

export default ImageView;
