import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImage = styled.img`
    width: 100%;
    max-height: 100%;

`

function ImageTile(props) {
    return (
        <Link to={`/screenshots/${props.data.episode}/${props.data.timestamp}`}>
            <StyledImage src={props.data.url} />
        </Link>
    )
}

export default ImageTile;
