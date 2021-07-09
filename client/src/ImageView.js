/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { toJpeg } from 'html-to-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import StyledLink from './StyledLink';
import ImageContainer from './ImageContainer';
import ControlPanel from './ControlPanel';
import Caption from './Caption';
import {
  Grid, Row, Col, ImgCol,
} from './Layout';

const ImageViewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function ImageView(props) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(images.filter(
    (image) => image.screenshot_key === parseInt(window.location.pathname.split('/')[3], 10),
  )[0]);
  const [relatedImages, setRelatedImages] = useState([]);
  const [captionDisplay, setCaptionDisplay] = useState('block');
  const [captionFont, setCaptionFont] = useState('Cooper Black');
  const location = useLocation();
  let tapOrClick = '';
  // sets current image
  useEffect(() => {
    setCurrentImage(images.filter(
      (image) => image.screenshot_key === parseInt(window.location.pathname.split('/')[3], 10),
    )[0]);
    // returns to top of page
    window.scrollTo(0, 0);
  }, [location]);
  // sets related images
  useEffect(() => {
    setRelatedImages((images.filter(
      (image) => image.text === currentImage.text && image.screenshot_key !== currentImage.screenshot_key,
    )));
  }, [currentImage]);
  function handleSubmit() {
    // saves image as jpeg
    const filename = `ITYSM-${currentImage.screenshot_key}-${Math.floor(Math.random() * 10000)}`;
    toJpeg(document.getElementById('target-image'), { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
    if (window.matchMedia('(min-width: 768px)').matches) {
      tapOrClick = 'Click';
    } else {
      tapOrClick = 'Tap';
    }
  }
  return (
    <ImageViewSection>
      <StyledLink to="/">
        <FontAwesomeIcon icon={faChevronLeft} />
        {' '}
        Back to search
      </StyledLink>
      <Grid>
        <Row>
          <Col>
            <ImgCol id="target-image">
              <img
                src={`${currentImage.url}?nocache=true`}
                alt={currentImage.text}
                style={{ width: '100%' }}
                crossOrigin="anonymous"
              />
              <Caption
                display={captionDisplay}
                font={captionFont}
                contentEditable
              >
                {currentImage.text}
              </Caption>
            </ImgCol>
            {captionDisplay === 'block' && (
            <p>{`${tapOrClick} text to edit.`}</p>
            )}
          </Col>
          <ControlPanel
            captionDisplay={captionDisplay}
            setCaptionDisplay={setCaptionDisplay}
            captionFont={captionFont}
            setCaptionFont={setCaptionFont}
            handleSubmit={handleSubmit}
          />
        </Row>
      </Grid>
      <ImageContainer images={relatedImages} />
    </ImageViewSection>
  );
}
ImageView.propTypes = {
  images: PropTypes.shape.isRequired,
};

export default ImageView;
