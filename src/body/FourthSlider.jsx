import React from 'react'
import KnowMore from './KnowMore'
function FourthSlider() {
  return (
    <>
    <div className="FourthSlider"  style={{ height: '695px' }}>
      <div className="fp-tableCell" style={{ height: '695px' }}>
        <div className="section4_info">
          <aside>
            <h3><span>towards</span> <br /> a brighter future</h3>
            <p>Encouraging energy conservation for a better tomorrow.</p>
            <div className="buttonlink">
              <a href="/energy-conservation/overview">
              <KnowMore/>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  )
}

export default FourthSlider