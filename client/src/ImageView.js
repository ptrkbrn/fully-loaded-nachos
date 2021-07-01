import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { toJpeg, toPng } from 'html-to-image';
import download from 'downloadjs';
import ImageContainer from './ImageContainer';
import Caption from './Caption';
import Button from './Button';
import { Grid, Row, Col, ImgCol } from './Layout';

function ImageView(props) {
    console.log(props.images);
    let [currentImage, setCurrentImage] = useState(props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0]);
    let [relatedImages, setRelatedImages] = useState(props.images.filter(image => image.text === currentImage.text && image.timestamp !== currentImage.timestamp))
    let [captionDisplay, setCaptionDisplay] = useState('block');
    let [captionFont, setCaptionFont] = useState('Cooper Black');
    let location = useLocation();
    let history = useHistory();
    useEffect(() => {
        setCurrentImage(props.images.filter(image => image.timestamp === parseInt(window.location.pathname.split('/')[3]))[0]);
    }, [location]);
    useEffect(()=> {
        setRelatedImages((props.images.filter(image => image.text === currentImage.text && image.timestamp !== currentImage.timestamp)));
    }, [currentImage]);
    function handleSubmit() {
        console.log(document.getElementById('target-image'));
        const filename = `ITYSM-${currentImage.timestamp}-${Math.floor(Math.random() * 10000)}`
        toJpeg(document.getElementById('target-image'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
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
        <div>
            <Link to="/">Back to search</Link>
            <h1>IMAGE VIEW!!</h1>
            <Grid>
                <Row>
                    <ImgCol id="target-image">
                        <img src={currentImage.url} style={{ width: '100%' }} />
                        <Caption display={captionDisplay} font={captionFont} contentEditable>{currentImage.text}</Caption>
                    </ImgCol>
                    <Col>
                        <div>
                            <input type="radio" />
                        </div>
                        <div>
                            <Button onClick={() => handleSubmit()}>Download</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
            
            <ImageContainer images={relatedImages} />
        </div>
    )
}

export default ImageView;
