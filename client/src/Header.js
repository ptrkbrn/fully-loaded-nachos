import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    display: flex;
    flex-directon: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }

`;

export default Header;
