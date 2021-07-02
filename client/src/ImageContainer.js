import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageTile from './ImageTile';

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    max-width: 90%;
    margin: 1em auto;
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr)
    }
`;

function ImageContainer(props) {
  const { images } = props;
  const imagesArr = images.map((image) => <ImageTile data={image} />);

  return (
    <StyledContainer>
      {imagesArr}
    </StyledContainer>

  );
}
ImageContainer.propTypes = {
  images: PropTypes.arrayOf.isRequired,
};

export default ImageContainer;
