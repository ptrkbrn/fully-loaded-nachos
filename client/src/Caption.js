import styled from 'styled-components';

const Caption = styled.p`
    color: white;
    font-size: 1.1em;
    position: absolute;
    margin: 0;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: ${(props) => props.font};
    -webkit-text-stroke: 1px black;
    display: ${(props) => props.display};
    @media only screen and (min-width: 830px) {
        font-size: 1.6em;
    }
`;

export default Caption;
