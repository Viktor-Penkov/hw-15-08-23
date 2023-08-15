import React from 'react';
import s from '../styles/vinnitsaStyle.css'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'

const Header = () => {
    return (
        <div>
             <div className="city_page">
    <div className="wrapper">
      
      <div className="city_text_container">
        <h1 className="city_title">Вінниця</h1>
        <p className="city_descr">Місто фонтанів, де живе близько 370 тисяч вінничан.
          Засноване 1363 року, в УНР у 1919 було тричі столицею України. Чотири рази очолювало рейтинг опитування
          «Найкомфортніше місто для життя в Україні». Це місто, що дбає про планету: у 2015 році отримало «Європейську
          енергетичну відзнаку». Щогла вінницької телевежі (354 метри) є найвищою у світі спорудою такого типу.
          Ну і вишенька на торті - серце солодкої України.

        </p>
      </div>
    </div>

  </div>
  <div className="city_gallery">
    <h2 className="city_galery_title"> Вінниця = місто фонтанів</h2>


    <div className="wrapper">
      <div className="galllery">

        <button className="gallery_button" data-micromodal-trigger="modal" data-index="0">
          <img className="gellery_image" src={img1} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="1">
          <img className="gellery_image" src={img2} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="2">
          <img className="gellery_image" src={img3} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="3">
          <img className="gellery_image" src={img4} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="4">
          <img className="gellery_image" src={img5} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="5">
          <img className="gellery_image" src={img6} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="6">
          <img className="gellery_image" src={img7} alt=""/>
        </button>
        <button className="gallery_button" data-micromodal-trigger="modal" data-index="7">
          <img className="gellery_image" src={img8} alt=""/>
        </button>


      </div>
    </div>
  </div>
  





            
     </div>
    );
}

export default Header;