import ImageTile from './ImageTile';

function ImageContainer(props) {
    const images = props.images.map(image => {
        return <ImageTile data={image} />
    })

    console.log(props.images);
    console.log(images);
    return (
        <div>
            {images}
        </div>

    )
}

export default ImageContainer;
