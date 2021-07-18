import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
              <h4>{item.title}</h4>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
