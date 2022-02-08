import React from 'react';
import "./ImagesTab.scss";

const ImagesTab = (props) => {
  const {imagesArr} = props;

  const images = imagesArr.map(image => {
    return <div key={image.id}>
      <img className="image" src={image.imageURL}/>
    </div>
  })

  // const userImages = imagesArr.map(images => {
  //   return images.map(image => {
  //     return <div key={image.id}>
  //     <img src={image.profileImages.imageURL}/>
  //   </div>
  //   })
  // })

  return <div className="images">
     {images}
  </div>
};

export default ImagesTab;
