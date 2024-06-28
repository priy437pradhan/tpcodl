import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './body.scss';
import VisionMission from './VisionMission';
import Ethics from './Ethics';
import VerticalSlider from './InitialSlide';

function Body() {
  return (
    <div className="bodyContainertp">
     
      <Router> 
        <Routes>

          <Route path="/" element={<VerticalSlider/>} />

          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/ethics" element={<Ethics />} />
        </Routes>
      </Router> 
     
    </div>
  );
}

export default Body;
