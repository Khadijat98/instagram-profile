import React from 'react';
import "./ProfileHeader.scss";

const ProfileHeader = (props) => {
  const {userProfileHeader} = props;

  // const firstProfile = profile.filter(userProfileHeader => userProfileHeader.id === 1) 

  // const displayHeading = () => {
  //   return <div>
  //   <img src={firstProfile.profileIcon} alt="" />
  // </div>;
  // }

  const displayHeader = userProfileHeader.map(header => {
    return <div className="profile-header" key={header.id}>
      <img className="profile-header__icon" src={header.profileIcon} alt="" />
      <h3 className="profile-header__title">{header.profileHeader}</h3>
      <button className="profile-header__button">Follow</button>
    </div>
  })

  return <div>
    {displayHeader}
  </div>;
};

export default ProfileHeader;
