import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container footer-container-simple">
        <p>© 2026 Rudranil Mondal. All rights reserved.</p>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon hover:opacity-80 transition-opacity"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
