import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="rounded-lg mb-10">
      <div className=" footer__container custom-text-footer">
        <article>
          <img
            className=" object-contain"
            src="/image/Group 165 (1).png"
            alt=""
          />
        </article>
        <article>
          <h4 className="font-medium  text-lg leading-6 font-al ">Product</h4>
          <Link to="/about">Mission</Link>
          <Link to="/plans">About</Link>
          <Link to="/trainers">Career</Link>
          <Link to="gallery">Contact</Link>
          <div className="footer__socials">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <AiOutlineTwitter />{" "}
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
          </div>
        </article>
        <article>
          <h4 className="font-medium  text-lg leading-6 font-al">Solutions</h4>
          <Link to="/about">Conversational AI Platforms</Link>
          <Link to="/plans">Data Annotation Services</Link>
          <Link to="/trainers">Data Collection Services</Link>
          <Link to="gallery">Process Mining Software</Link>
          <Link to="contact">RPA Software</Link>
          <Link to="contact">Recommendation Engines</Link>
          <Link to="contact">Voice Bots</Link>
        </article>
        <article>
          <h4 className="font-medium  text-lg leading-6 font-al">
            For Tech Users
          </h4>
          <Link to="/about">Learn use Cases</Link>
          <Link to="/plans">Shortlist Solutions</Link>
          <Link to="/trainers">Manage Your Tech Stack</Link>
          <Link to="gallery">Get Advice</Link>
        </article>
        <article>
          <h4 className="font-medium  text-lg leading-6 font-al">Vendors</h4>
          <Link to="/about">Claim Your Solution</Link>
          <Link to="/plans">Learn Best Practices</Link>
        </article>
        <article>
          <h4 className="font-medium  text-lg leading-6 font-al">Investors</h4>
          <Link to="/about">Identify Hidden Gems</Link>
          <Link to="/plans">Tech Firms By Country</Link>
          <Link to="/trainers">Tech Firms By City</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          Data-driven, Transparent, Practical New Tech Industry Analysis
        </small>
        <div className="text-xs leading-30 opacity-50">
          Copyright © 2023 Creatiful | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
