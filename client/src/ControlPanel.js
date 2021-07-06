/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from 'react-styled-toggle';
import ToggleWrapper from './ToggleWrapper';
import Button from './Button';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 2em;
    box-sizing: border-box;
`;

function ControlPanel(props) {
  const {
    captionDisplay, setCaptionDisplay, captionFont, setCaptionFont, handleSubmit,
  } = props;
  return (
    <StyledDiv>
      <div>
        <ToggleWrapper>
          <Toggle
            checked={captionDisplay === 'block'}
            onChange={() => setCaptionDisplay(captionDisplay === 'block' ? 'none' : 'block')}
            labelLeft="Show caption"
          />
        </ToggleWrapper>
      </div>
      <div>
        { captionDisplay === 'block'
            && (
            <ToggleWrapper>
              <Toggle
                checked={captionFont === 'Cooper Black'}
                onChange={() => setCaptionFont(captionFont === 'Cooper Black' ? 'Arial Black, sans-serif' : 'Cooper Black')}
                labelLeft="Fancy font"
              />
            </ToggleWrapper>
            )}
      </div>
      <div style={{ width: '100%' }}>
        <Button onClick={() => handleSubmit()}>Download</Button>
      </div>
    </StyledDiv>
  );
}
ControlPanel.propTypes = {
  captionDisplay: PropTypes.string.isRequired,
  setCaptionDisplay: PropTypes.func.isRequired,
  captionFont: PropTypes.string.isRequired,
  setCaptionFont: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ControlPanel;
