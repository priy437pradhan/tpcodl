import React from "react";
import Apply from '../assets/Apply.png'
import CustomerLog from '../assets/CustomerLog.png'
const SlideRightMenu = () => {
  return (
    <div className="sticky_right_menu" style={{ display: "block" }}>
      <aside>
        <ul>
          <li>
            <a href="https://portal.tpcentralodisha.com:4114/tpcodl-bill-view/">
              <i>
                <img
                  src={CustomerLog} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Customer Login</h3>
            </a>
          </li>
          <li>
            <a href="/customer-zone/bill-payment/energy-bill.aspx">
              <i>
              <img
                  src={Apply} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Pay Your bill</h3>
            </a>
          </li>
          <li>
            <a href="/customerzone/new-connection">
              <i>
              <img
                  src={Apply} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Apply for new connection</h3>
            </a>
          </li>
          <li>
            <a
              href="https://portal.tpcentralodisha.com:4114/tpcodl-bill-view/complainWebsite"
              target="_blank"
            >
              <i>
              <img
                  src={Apply} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Complaint Registration</h3>
            </a>
          </li>
          <li>
            <a href="https://portal.tpcentralodisha.com:4114/tpcodl-bill-view/searchNotification">
              <i>
              <img
                  src={Apply} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Notification Status</h3>
            </a>
          </li>
          <li>
            <a href="/offers-and-schemes">
              <i>
              <img
                  src={Apply} className="lrImg2"
                  alt=""
                />
              </i>
              <h3>Offers &amp; Schemes</h3>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SlideRightMenu;
