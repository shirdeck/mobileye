import React from "react";
import Logo from "../../images/logo_white.png";
import BgFill from "../../images/top_bkg_fill.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Counter from "../Counter/Counter";

library.add(fab);

const Hero = () => {
  return (
    <div className="hero">
      <img src={BgFill} alt="" className="bg-fill" />
      <div className="header">
        <img src={Logo} alt="" className="logo"/>
        <ul className="links">
          <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
          </a>
          </li>
          <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
            </a>
          </li>
          <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </a>
          </li>
          <li>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
            </a>
          </li>
        </ul>
      </div>
      <div class="headline">
        <span>visit mobileye</span>
        <span> at ces 2019!</span>
        <p>
          Experience Mobileye’s latest autonomous driving innovations at the
          Mobileye booth
        </p>
        <p>LVCC, North Hall, 7511 | January 8th -11th | Las Vegas</p>
      </div>
      <div class="countdown">
        <Counter />
      </div>
      <div className="details-box">
        <div className="title">an hour <br/>with amnon</div>
        <div className="content">
          <p>
            Come hear about the state of our autonomous driving program and how
            the latest AD and ADAS technologies are being delivered globally.
            Space is limited – register now!
          </p>
          <hr class="solid" />
          <p className="sub-content">Tuesday, January, 8th at 11am PST | LVCC Room 5228</p>
        </div>
      </div>
    <div className="button register">
        <span>register now</span>
    </div>
    </div>
  );
};

export default Hero;
