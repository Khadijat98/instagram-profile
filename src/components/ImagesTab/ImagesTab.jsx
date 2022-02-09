import React from 'react';
import "./ImagesTab.scss";

const ImagesTab = (props) => {
  const {users} = props;

  console.log(users)
  const images = users[0].profileImages.map(image => {
    return <div>
      <img className="image" src={image}/>
    </div>
  })

  return <div className="images">
     {images}
  </div>
};

export default ImagesTab;
