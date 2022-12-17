import React from "react";
import "../css/footer.css";

function footer() {
  return (
    <div className="foter">
      <div className="lele">
        <h3 style={{ color: "white" }}>Product</h3>
        <ul>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Developers</a>
          </li>
        </ul>
      </div>
      <div className="lele2">
        <h3 style={{ color: "white" }}>Company</h3>
        <ul>
          <li>
            <a href="">Suport</a>
          </li>
          <li>
            <a href="">help desk</a>
          </li>
          <li>
            <a href="">give review</a>
          </li>
          <li>
            <a href="">ask us</a>
          </li>
        </ul>
      </div>
      <div className="company">
        <h3 style={{ color: "white" }}>Company</h3>
        <p style={{ color: "white" }}>Buy your dream virtual land</p>
        <ul>
          <li style={{ color: "white" }}>Company tumahre gaand me</li>
          <li style={{ color: "white" }}>123 45 City, Country larpur</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
