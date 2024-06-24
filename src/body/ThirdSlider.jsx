import React from 'react';

function ThirdSlider() {
  return (
    <div className="ThirdSlider">
      <div className="fp-tableCell" style={{ height: '316px' }}>
        <aside>
          <div className="solar_home">
            <div>
            <h3>Go solar</h3>
            <p>TPCODL is committed towards sustainable power distribution and encourages the use of solar energy for a greener tomorrow. Get more details on Solar Rooftop to Save More!</p>
            <ul>
              <li className="reg">
                <a href="https://portal.tpcentralodisha.com:4114/RooftopSolarRegistration/Home?Discom=TPCODL" target="_blank">
                  <strong>Register</strong> <br /> <small>for Solar Rooftops</small>
                </a>
              </li>
              <li className="calculator">
                <a href="https://calculator.tatapowersolar.com/" target="_blank">
                  <strong>Solar</strong> <br /> <small>Calculator</small>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ThirdSlider;
