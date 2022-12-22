import React from "react";
import "../css/footer.css";
import { AiFillGithub } from "react-icons/ai";
import{AiFillFacebook} from "react-icons/ai"
import{AiFillTwitterSquare} from "react-icons/ai"
import{AiFillLinkedin}from "react-icons/ai"
function footer() {
  return (
    <>
      <div className="foter">
        <div className="footer-content">
          <h3>Metaland</h3>
          <p>
            Superheroes are often as popular as celebrities, as influential as
            politicians, and sometimes even as revered as gods. But that's when
            they're using their powers for good. What happens when the heroes go
            rogue and start abusing their powers? When it's the powerless
            against the super powerful.
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <AiFillFacebook/>
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare/>
              </a>
            </li>
            <li>
              <a href="#">
              <AiFillGithub/>
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;2021 <a href="#">Metaland</a>{" "}
          </p>
        </div>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default footer;
