import ImageTile from './ImageTile';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    max-width: 90%;
    margin: 1em auto;
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr)
    }
`

function ImageContainer(props) {
    const images = props.images.map(image => {
        return <ImageTile data={image} />
    })

    console.log(props.images);
    console.log(images);
    return (
        <StyledContainer>
            {images}
        </StyledContainer>

    )
}

export default ImageContainer;
