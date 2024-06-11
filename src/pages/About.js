import React, { Component } from 'react';
import "./About.css";
import RythamImage from "../assets/rytham.jpg";


  
export default class About extends Component {
  render() {
    return (
      <div>
        
        <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" src={RythamImage} alt="Profile Pic"/>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <div className="name_title">Rytham Dawar</div>
              <div className="brief_description">
                <p> Hi! I'm Rytham, rising junior at UC Davis </p>
                <p> I'm studying Computer Science and Statistics </p>
                <p> I worked at 2 startups before, and have done multiple fellowships at Capital One, Accenture and more</p>
                <p> In my free time, I love to box and play basketball :)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}