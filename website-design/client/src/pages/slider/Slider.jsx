import "./slider.css";

function Slider() {
  return (
    <div className="slider">
      <img
        src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="sliderImg"
      />
      <div className="sliderText">
        <div className="sliderTextTitle">
          <span>Bağlıca Kalben</span>
          <span>Sağlık Kabini</span>
        </div>
        <p className="sliderTextContent">
          Alanında Uzman Hemşire Ekibi,
          <br /> Donanımlı Ekipmanlarıyla
          <br />
          Hizmetinizdeyiz.
        </p>
        <button className="sliderButton buttonLeft">Hizmetlerimiz</button>
        <button className="sliderButton buttonRight">İletişim</button>
      </div>
    </div>
  );
}

export default Slider;
