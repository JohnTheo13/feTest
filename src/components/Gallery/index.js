// @flow
import React, { Component } from 'react';
import Lightbox from 'react-images';
import GalleryContainer from './GalleryContainer';

type GalleryPropType = {
  heading?: string,
  images?: Array<{
    src: string,
    thumbnail: string,
    id: number
  }>,
  showThumbnails?: boolean,
  subheading?: string,
  theme?: Object
}

class Gallery extends Component<GalleryPropType, {lightboxIsOpen: boolean, currentImage: number}> {
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  openLightbox = (index, event) => {
      event.preventDefault();
      this.setState({
          currentImage: index,
          lightboxIsOpen: true,
      });
  }

  closeLightbox = () => {
      this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
      });
  }

  gotoPrevious = () => {
      this.setState({
          currentImage: this.state.currentImage - 1,
      });
  }

  gotoNext = () => {
      this.setState({
          currentImage: this.state.currentImage + 1,
      });
  }

  gotoImage = (index) => {
      this.setState({
          currentImage: index,
      });
  }

  handleClickImage = () => {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
  }

  renderGallery  = () => {
      const {images} = this.props;

      if (!images) return;

      const gallery = images.map((image, i) => {
          return (
              <a
                  href={image.src}
                  className='thumbnail'
                  key={image.thumball}
                  onClick={(e) => this.openLightbox(i, e)}
              >
                  <img src={image.src} className="moodboard__image img-responsive" alt=""/>
              </a>
          );
      });

      return (
          <div className='moodboard'>
              {gallery}
          </div>
      );
  }

    render() {
      const { images } = this.props;
      return (
        <GalleryContainer>
          {this.props.heading && <h2>{this.props.heading}</h2>}
          {this.props.subheading && <p>{this.props.subheading}</p>}
          <div>
            {images.length > 0 &&
              images.map((image, i) => (
                <a
                  href={image.src}
                  key={image.src}
                  onClick={e => this.openLightbox(i, e)}
                >
                  <img src={image.src} alt=""/>
                </a>))
            }
          </div>
          <Lightbox
            currentImage={this.state.currentImage}
            images={images}
            isOpen={this.state.lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            showThumbnails={this.props.showThumbnails}
            theme={this.props.theme}
          />
        </GalleryContainer>
      );
  }
}

export default Gallery;
