import styled from 'styled-components';

export const Grid = styled.div`
    width: 80%;
    margin: auto;
    @media only screen and (min-width: 768px) {
        width: 90%;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Col = styled.div`
    width: 100%;
    @media only screen and (min-width: 768px) {
        min-width: 50%;
    }
`;

export const ImgCol = styled(Col)`
    position: relative;
    text-align: center;
`;
