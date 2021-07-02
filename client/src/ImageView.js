/* eslint-disable react/jsx-filename-extension */
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { toJpeg } from 'html-to-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-styled-toggle';
import ToggleWrapper from './ToggleWrapper';
import StyledLink from './StyledLink';
import ImageContainer from './ImageContainer';
import ControlPanel from './ControlPanel';
import Caption from './Caption';
import Button from './Button';
import {
  Grid, Row, ImgCol,
} from './Layout';

const ImageViewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function ImageView(props) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(images.filter(
    (image) => image.timestamp === parseInt(window.location.pathname.split('/')[3], 10),
  )[0]);
  const [relatedImages, setRelatedImages] = useState(images.filter(
    (image) => image.text === currentImage.text && image.timestamp !== currentImage.timestamp,
  ));
  const [captionDisplay, setCaptionDisplay] = useState('block');
  const [captionFont, setCaptionFont] = useState('Cooper Black');
  const location = useLocation();
  useEffect(() => {
    setCurrentImage(images.filter(
      (image) => image.timestamp === parseInt(window.location.pathname.split('/')[3], 10),
    )[0]);
  }, [location]);
  useEffect(() => {
    setRelatedImages((images.filter(
      (image) => image.text === currentImage.text && image.timestamp !== currentImage.timestamp,
    )));
  }, [currentImage]);
  function handleSubmit() {
    const filename = `ITYSM-${currentImage.timestamp}-${Math.floor(Math.random() * 10000)}`;
    toJpeg(document.getElementById('target-image'), { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
    // toPng(document.getElementById('target-image'))
    // .then(function (dataUrl) {
    //     download(dataUrl, 'my-node.png');
    //   });
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
            <img src={currentImage.url} alt={currentImage.text} style={{ width: '100%' }} />
            <Caption
              display={captionDisplay}
              font={captionFont}
              contentEditable
            >
              {currentImage.text}
            </Caption>
          </ImgCol>
          <ControlPanel>
            <div>
              <ToggleWrapper>
                <Toggle
                  checked={captionDisplay === 'block'}
                  onChange={() => setCaptionDisplay(captionDisplay === 'block' ? 'none' : 'block')}
                  labelLeft="Show text"
                />
              </ToggleWrapper>
            </div>
            <div>
              { captionDisplay === 'block'
                && (
                <ToggleWrapper>
                  <Toggle
                    checked={captionFont === 'Cooper Black'}
                    onChange={() => setCaptionFont(captionFont === 'Cooper Black' ? 'Arial Black' : 'Cooper Black')}
                    labelLeft="Fancy font"
                  />
                </ToggleWrapper>
                )}
            </div>
            <div style={{ width: '100%' }}>
              <Button onClick={() => handleSubmit()}>Download</Button>
            </div>
          </ControlPanel>
        </Row>
      </Grid>

      <ImageContainer images={relatedImages} />
    </ImageViewSection>
  );
}
ImageView.propTypes = {
  images: PropTypes.arrayOf.isRequired,
};

export default ImageView;
