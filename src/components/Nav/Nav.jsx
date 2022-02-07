import React from 'react';
import instagramLogo from "../../assets/images/instagram-logo.png";
import { FaHome } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./Nav.scss";

const Nav = () => {
  return <div className="nav">
    <img className="nav__logo" src={instagramLogo} alt="" />
    <FaHome className="nav__link"/>
    <FaRegPaperPlane className="nav__link"/>
    <FaPlusSquare className="nav__link"/>
    <FaCompass className="nav__link"/>
    <FaHeart className="nav__link"/>
    <FaUser className="nav__link"/>
  </div>;
};

export default Nav;
