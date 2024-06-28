import smilingGirl from '../assets/customer_zone_info.png'
import KnowMore from './KnowMore'
function SecondSlider() {
  return (
    <div className='sliderTwo '>
      <div className="info addAnimate" data-class="fadeInBottom" data-aos="fade-up">
        <img src={smilingGirl} alt="" />
      </div>
      <div className="zone">
        <h3><span>Customer</span> Zone</h3>
        <p>Apply for a New Connection, Pay Your Bill and avail many such services online easily with just a click of button.</p>
        <div className="buttonlink">
          
          <a href="https://portal.tpcentralodisha.com:4114/tpcodl-bill-view/" target="_blank">
          <KnowMore/>
           
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondSlider;
