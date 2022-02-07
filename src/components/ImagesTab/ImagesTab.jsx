import React from 'react';
import users from "../../data/users";

const ImagesTab = (props) => {
  const {imagesArr} = props;

  const images = imagesArr.map(image => {
    return <div>
      <img src={image.profileImages}/>
    </div>
  })

  return <div>
     {images}
  </div>;
};

export default ImagesTab;
