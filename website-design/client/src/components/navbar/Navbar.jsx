import "./navbar.css";
import { Search, Cancel } from "@material-ui/icons";
import { useState } from "react";
export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="navbarLeftLogo">
          <img
            src="https://www.baglicakalbensaglikkabini.com/wp-content/uploads/2020/12/baglica-kalben-saglik-kabini-logo-2.png"
            alt=""
            className="navbarLogo"
          />
        </div>
      </div>
      <div className="navbarRight">
        <ul className="navbarRightList">
          <li className="navbarRightListItem">Anasayfa</li>
          <li className="navbarRightListItem">Hakkımızda</li>
          <li className="navbarRightListItem">ANKARA EVDE SAĞLIK</li>
          <li className="navbarRightListItem">Hizmetlerimiz</li>
          <li className="navbarRightListItem">Blog</li>
          <li className="navbarRightListItem">İletişim</li>
    <span className="navbarIcon">
          <Search
            onClick={() => {
              setShowSearch(true);
            }}
            className={
              showSearch
                ? "navbarSearchIcon showSearchIcon"
                : "navbarSearchIcon"
            }
          /></span>
        </ul>
      </div>
    </div>
  );
}
