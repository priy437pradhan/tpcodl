import Rohini from  '../assets/Roshni_(1)_75bc31cd2a.png'
import EthicsImg from  '../assets/Ethics.png'
import TheftModified from  '../assets/Theft-modified.jpeg'
import Arr from  '../assets/Arr.jpg'
import EnergyC from '../assets/EnergyC.png'
import Safety from '../assets/Safety.png'
import Outage from '../assets/Outage.png'
const SlideLeftMenu = () => {
  return (
    <div className="sticky_left_menu" style={{ display: "block" }}>
      <aside>
        <ul>
          <li>
            <a href="/corporate/ethics">
              <i>
                <img className="lrImg"
                  src={EthicsImg}
                  alt=""
                />
              </i>
              <h3>Ethics/ Harassment</h3>
            </a>
          </li>
          <li>
            <a href="https://portal.tpcentralodisha.com:4111/Enforcement_Theft/">
              <i>
                <img className="lrImg"
                  src={TheftModified}
                  alt=""
                />
              </i>
              <h3>Power Theft</h3>
            </a>
          </li>
          <li>
            <a href="/customerzone/tariff-and-regulations/annual-revenue-requirement">
            <img className="lrImg"
                  src={Arr}
                  alt=""
                />
              <h3>ARR &amp; Business Plan</h3>
            </a>
          </li>
          <li>
            <a href="/energy-conservation/overview">
            <i>
                <img className="lrImg"
                  src={EnergyC}
                  alt=""
                />
              </i>
              <h3>Energy Conservation</h3>
            </a>
          </li>
          <li>
            <a href="https://kavach.tpodisha.com/(S(ekve4weink5vya3xdewrcmmx))/Reports/PSDCases?discom=CODL">
              <i>
                <img className="lrImg"
                  src={Outage}
                  alt=""
                />
              </i>
              <h3>Outage Status</h3>
            </a>
          </li>
          <li>
            <a href="/roshni">
              <i>
                <img src={Rohini} className="lrImg" alt="" />
              </i>
              <h3>Roshni</h3>
            </a>
          </li>
          <li>
            <a href="/safety">
              <i>
                <img
                  src={Safety}
                  alt=""
                />
              </i>
              <h3>Safety</h3>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SlideLeftMenu;
