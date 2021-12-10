import "./topbar.css";
import { Phone } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <ul className="topbarLeftList">
          <li className="topbarLeftListItem">
            <Phone className="topbarPhoneIcon" />
            <span className="topbarPhone">Hemen Ara: +90 538 700 3428 </span>
          </li>
          <div className="topbarLine"></div>
          <li className="topbarLeftListItem">
            <Phone className="topbarPhoneIcon" />
            <span className="topbarPhone">Hemen Ara: +90 538 700 3428</span>
          </li>
        </ul>
        <span className="topbarLeftPhone"></span>
      </div>
      <div className="topbarRight">
        <button className="topbarButton">RANDEVU AL</button>
      </div>
    </div>
  );
}

export default Topbar;
