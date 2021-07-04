import styled from 'styled-components';

const Button = styled.button`
    font-family: 'Cooper Black';
    font-size: 2em;
    background: transparent;
    margin: 1em;
    border: none;
    color: white;
    cursor: pointer;
    -webkit-text-stroke: 1px black;
    :hover {
        text-shadow: -4px 4px 0px black;
    }
`;

export default Button;
