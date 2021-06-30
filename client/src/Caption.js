import styled from 'styled-components';

const Caption = styled.p`
    color: white;
    font-size: 1.5em;
    position: relative;
    bottom: 3em;
    font-family: ${props => props.font};
    -webkit-text-stroke: 1px black;
    display: ${props => props.display};
`

export default Caption;