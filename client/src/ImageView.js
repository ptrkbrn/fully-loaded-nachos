import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import ImageContainer from './ImageContainer';
import Caption from './Caption';
import Button from './Button';

function ImageView(props) {
    console.log(props.images);
    let [currentImage, setCurrentImage] = useState(props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0]);
    let [relatedImages, setRelatedImages] = useState(props.images.filter(image => image.text === currentImage.text && image.timestamp !== currentImage.timestamp))
    let [captionDisplay, setCaptionDisplay] = useState('block');
    let [captionFont, setCaptionFont] = useState('Cooper Black');
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
                <Caption display={captionDisplay} font={captionFont} contentEditable>{currentImage.text}</Caption>
            </div>
            <Button onClick={() => alert("Clicked!")}>Download</Button>
            <ImageContainer images={relatedImages} />
        </div>
    )
}

export default ImageView;
