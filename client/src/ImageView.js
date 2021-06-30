import { Link } from 'react-router-dom';

function ImageView(props) {
    console.log(props.images);
    let currentImage = props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0];
    console.log(currentImage);
    return (
        <div>
            <Link to="/">Back to search</Link>
            <h1>IMAGE VIEW!!</h1>
            <div contentEditable>
                <img src={currentImage.url} />
                <p>{currentImage.text}</p>
            </div>
        </div>
    )
}

export default ImageView;
