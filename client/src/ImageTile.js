/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImage = styled.img`
    width: 100%;
    max-height: 100%;

`;

function ImageTile(props) {
  const { data } = props;
  return (
    <Link to={`/screenshots/${data.episode}/${data.screenshot_key}`}>
      <StyledImage src={data.url} />
    </Link>
  );
}
ImageTile.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default ImageTile;
