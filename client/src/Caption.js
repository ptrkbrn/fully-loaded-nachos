import styled from 'styled-components';

const Caption = styled.p`
    color: white;
    font-size: 1.3em;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: ${props => props.font};
    -webkit-text-stroke: 1px black;
    display: ${props => props.display};
`

export default Caption;