import React from 'react'
import '../App.css'
const Capital = () => {



//  return (
 
//    <div>
//      {/* Section Content */}
//      <section>
//        <h2>Information about Austin</h2>
//        <p>Austin is the capital city of Texas, known for its tech industry, vibrant cultural life, and live music scene.</p>
//        <h3>History</h3>
//        <p>Founded in 1839.</p>
//        <h3>Landmarks</h3>
//        <ul className="custom-list">
//          <li>The Texas State Capitol</li>
//          <li>Zilker Park</li>
//          <li>The University of Texas at Austin</li>
//        </ul>
//      </section>

//      {/* Aside Content */}
//      <aside>
//        <h2>City Statistics</h2>
//        <ul className="custom-list">
//          <li><strong>Population:</strong> Approx. 1 million</li>
//          <li><strong>Area:</strong> 326.5 square miles</li>
//        </ul>
//        <p>Links to local resources: <a href="#">Resources</a> | <a href="#">AustinTexas.gov</a></p>
//      </aside>
//    </div>
//  );
// };

return (
  <div>
    <section>
      <h2>Information about Austin</h2>
      <img src="austin.jpg" alt="Austin Skyline" />
      <p>Austin is the capital city of Texas, known for its tech industry, vibrant cultural life, and live music scene.</p>
      <h3>History</h3>
      <p>Founded in 1839.</p>
      <h3>Landmarks</h3>
      <ul className="custom-list">
        <li>The Texas State Capitol</li>
        <li>Zilker Park</li>
        <li>The University of Texas at Austin</li>
      </ul>
    </section>

    <aside>
      <h3>City Statistics</h3>
      <ul>
        <li><strong>Population:</strong> Approx. 1 million</li>
        <li><strong>Area:</strong> 326.5 square miles</li>
      </ul>
      <p>Links to local resources: <a href="https://www.austintexas.gov" target="_blank" rel="noopener noreferrer">AustinTexas.gov</a></p>
    </aside>
  </div>
);
};

export default Capital;