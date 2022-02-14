import React from "react";

const CardOutlet = () => {
  return (
    <div>
      {/* /box_list */}
      <div className="isotope-wrapper">
        <div className="box_list isotope-item latest">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <figure>
                <a href="/detail">
                  <img
                    src="img/background/HairCut.jpg"
                    className="img-fluid"
                    alt
                    width={800}
                    height={533}
                  />
                  <div className="read_more">
                    <span>Read more</span>
                    {/* <a href="/detail">Read more</a> */}
                  </div>
                </a>
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="wrapper">
                <a href="#0" className="wish_bt" />
                <h3>
                  <a href="/detail">Kaizen Haircut</a>
                </h3>
                <p>
                  KAIZEN adalah pelayanan potong rambut tanpa air yang
                  dijalankan oleh hairstylist yang dilatih secara professional
                  dengan menggunakan teknik ‘zen wash’ yang inovatif untuk
                  memotong rambut hanya dalam 10 menit saja.
                </p>
                <span className="price">
                  From <strong>$124</strong> /per person
                </span>
              </div>
              <ul>
                <li>
                  <i className="icon_clock_alt" /> 09:AM - 20:00 PM
                </li>
                <li>
                  <div className="score">
                    <span />
                  </div>
                </li>
                <li>
                  <i className="icon_pin_alt" /> Kota Surabaya
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOutlet;