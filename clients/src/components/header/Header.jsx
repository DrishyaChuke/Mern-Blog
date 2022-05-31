import React from "react";
import ReactRotatingText from "react-rotating-text";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to <br/><i class="fab fa-blogger-b"/>logster</span>
        <span className="headerTitleLg">
          <h3>
            <ReactRotatingText
              pause="2000"
              typingInterval="20"
              deletingInterval="10"
              items={[
                "Read",
                "Write",
                "Share",
                "Connect"
              ]}
            />
          </h3>
          <button className="btn">
            <Link to="/">
            Get Started
            </Link>
          </button>
        </span>
        
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
