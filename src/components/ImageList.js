import React from 'react';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img
        key={image.id}
        src={image.urls.regular}
        width="30%"
        alt={image.description}
      />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
