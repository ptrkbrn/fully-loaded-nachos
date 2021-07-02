import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Cooper Black';
    font-size: 1.3em;
    margin: 1em;
    -webkit-text-stroke: 1px black;
    :hover {
        text-shadow: -2px 2px 0px black;
    }
`;

export default StyledLink;
