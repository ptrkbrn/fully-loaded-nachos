/* eslint-disable react/jsx-filename-extension */
import { React, useEffect, useState } from 'react';
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
  Grid, Row, ImgCol,
} from './Layout';

const ImageViewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function ImageView() {
  const [currentImage, setCurrentImage] = useState({});
  const [relatedImages, setRelatedImages] = useState([]);
  const [captionDisplay, setCaptionDisplay] = useState('block');
  const [captionFont, setCaptionFont] = useState('Cooper Black');
  const location = useLocation();
  // on page load, calls API and gets page data
  useEffect(() => {
    console.log('fetching!');
    fetch(`${window.location.pathname}`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // sets current image based on api response
        setCurrentImage(data.filter((datum) => datum.screenshot_key === parseInt(window.location.pathname.split('/')[3], 10))[0]);
        // sets related images
        setRelatedImages(data.filter((datum) => datum.screenshot_key !== parseInt(window.location.pathname.split('/')[3], 10)));
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, [location]);
  function handleSubmit() {
    // saves image as jpeg
    const filename = `ITYSM-${currentImage.timestamp}-${Math.floor(Math.random() * 10000)}`;
    toJpeg(document.getElementById('target-image'), { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
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

export default ImageView;
