import React from 'react';
import '../App.css';
import Pop from '../images/population.jpg';
import Incorp from '../images/incorp.jpg';
import Class from '../images/class.jpeg';
import Income from '../images/income.jpg';
import Flag from '../images/Flag.webp';



const Capital = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Austin</h1>
      </header>
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
      {/* Aside Content with table inside */}
      <aside>
        <h3>City Statistics</h3>
        <table className="city-stats">
          <tbody>
            <tr>
              <td><strong>Population:</strong></td>
              <td>Approx. 1 million</td>
              <td><img className="table-images" src={Pop} alt="Population Image" /></td>
            </tr>
            <tr>
              <td><strong>Year of Incorporation:</strong></td>
              <td>1839</td>
              <td><img className="table-images" src={Incorp} alt="Incorporation Image" /></td>
            </tr>
            <tr>
              <td><strong>Region:</strong></td>
              <td>Central Texas</td>
              <td><img className="table-images" src={Flag} alt="Flag Image" /></td>
            </tr>
            <tr>
              <td><strong>Classification:</strong></td>
              <td>Urban</td>
              <td><img className="table-images" src={Class} alt="Classification Image" /></td>
            </tr>
            <tr>
              <td><strong>Average Income Level:</strong></td>
              <td>Higher than state average</td>
              <td><img className="table-images" src={Income} alt="Income Image" /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p>Links to local resources: <a href="https://www.austintexas.gov" target="_blank" rel="noopener noreferrer">AustinTexas.gov</a></p>
      </aside>
    </div>
  );
};

export default Capital;