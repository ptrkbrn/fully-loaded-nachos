import styled from 'styled-components';

export const Grid = styled.div`
    width: 80%;
    margin: auto;
    @media only screen and (min-width: 830px) {
        width: 90%;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (min-width: 830px) {
        flex-direction: row;
    }
`;

export const Col = styled.div`
    width: 100%;
    overflow: hidden;
    @media only screen and (min-width: 830px) {
        min-width: 50%;
    }
`;

export const ImgCol = styled(Col)`
    position: relative;
    text-align: center;
`;
