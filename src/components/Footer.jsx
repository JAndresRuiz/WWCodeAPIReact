import "../Styles/Footer.css";
import Logo from "../assets/logo.png";
import Facebook from "../assets/Facebook.png";
import Twiter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="socialMediaContainer">
        <div className="logoFooterImage">
          <img src={Logo} />
        </div>
        <p>
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
        <ul className="socialMediaIcons">
          <li>
            <a href="https://www.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021" target="_blank">
              <img className="socialMediaImg" src={Facebook} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Pokemon" target="_blank">
              <img className="socialMediaImg" src={Twiter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pokemon/?hl=es" target="_blank">
              <img className="socialMediaImg" src={Instagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="extraInfoContainer">
        <ul>
          <p>About</p>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Partnership</a>
          </li>
          <li>
            <a href="#">Bussiness Relation</a>
          </li>
        </ul>
        <ul>
          <p>Community</p>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Podcast</a>
          </li>
          <li>
            <a href="#">Invite a friend</a>
          </li>
        </ul>
        <ul>
          <p>Socials</p>
          <li>
            <a href="#">Discord</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
