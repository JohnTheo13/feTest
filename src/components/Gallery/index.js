// @flow
import React, { Component } from 'react';
import Lightbox from 'react-images';
import GalleryContainer from './GalleryContainer';

type GalleryPropType = {
  images: Array<{
    src: string,
    thumbnail: string,
    id: number
  }>,
  showThumbnails?: boolean,
  theme?: Object
}

class Gallery extends Component<GalleryPropType, {lightboxIsOpen: boolean, currentImage: number}> {
  constructor() {
    super();
    this.state = { lightboxIsOpen: false, currentImage: 0 };
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({ currentImage: index, lightboxIsOpen: true });
  }

  closeLightbox = () => {
    this.setState({ currentImage: 0, lightboxIsOpen: false });
  }

  gotoPrevious = () => {
    const { currentImage } = this.state;
    this.setState({ currentImage: currentImage - 1 });
  }

  gotoNext = () => {
    const { currentImage } = this.state;
    this.setState({ currentImage: currentImage + 1 });
  }

  gotoImage = index => {
    this.setState({ currentImage: index });
  }

  handleClickImage = () => {
    const { currentImage } = this.state,
      { images: { length } } = this.props;
    if (currentImage === length - 1) {
      return;
    }
    this.gotoNext();
  }

  render() {
    const {
        images, showThumbnails, theme,
      } = this.props,
      { currentImage, lightboxIsOpen } = this.state;
    return (
      <GalleryContainer>
        <div>
          {images.length > 0
            && images.map((image, i) => (
              <a
                href={image.src}
                key={image.src}
                onClick={e => this.openLightbox(i, e)}
              >
                <img src={image.src} alt="thumbnail" />
              </a>))
          }
        </div>
        <Lightbox
          currentImage={currentImage}
          images={images}
          isOpen={lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={showThumbnails}
          theme={theme}
        />
      </GalleryContainer>
    );
  }
}

export default Gallery;
