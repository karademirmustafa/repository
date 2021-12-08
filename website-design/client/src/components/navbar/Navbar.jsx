import "./navbar.css";
import { Facebook, Instagram, Phone, Twitter } from "@material-ui/icons";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
          alt=""
          className="navbarLogoImg"
        />

        <span className="navbarPhone">
  
          <Phone className="navbarIconPhone" /> +90 538 700 3428
        </span>
      </div>
      <div className="navbarCenter">
        <ul className="navbarList">
          <div className="navbarListItem">Anasayfa</div>
          <div className="navbarListItem">İletişim</div>
          <div className="navbarListItem">Biz Kimiz?</div>
          <div className="navbarListItem">Hemen Ara!</div>
        </ul>
      </div>
      <div className="navbarRight">
        <Instagram className="navbarIcon" />
        <Twitter className="navbarIcon" />
        <Facebook className="navbarIcon" />
      </div>
    </div>
  );
}
