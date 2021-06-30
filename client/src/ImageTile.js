import styled from 'styled-components';

const StyledImage = styled.img`
    width: 100%;
    max-height: 100%;

`

function ImageTile(props) {
    return (
        <StyledImage src={props.data.url} />
    )
}

export default ImageTile;
