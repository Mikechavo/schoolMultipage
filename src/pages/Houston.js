import React from 'react'
import '../App.css'
import Pop from '../images/population.jpg';
import Incorp from '../images/incorp.jpg';
import Class from '../images/class.jpeg';
import Income from '../images/income.jpg';
import Flag from '../images/Flag.webp';

const Houston = () => {



  return (
    <div>
      <header>
        <h1>Welcome to Houston</h1>
      </header>
      <section>
        <h2>Information about Houston</h2>
        <img src="austin.jpg" alt="Austin Skyline" />
        <p>?.</p>
        <h3>History</h3>
        <p>?.</p>
        <h3>Landmarks</h3>
        <ul className="custom-list">
          <li>?</li>
          <li>?</li>
          <li>?</li>
        </ul>
      </section>

      <aside>
        <h3>City Statistics</h3>
        <table className="city-stats">
          <tbody>
            <tr>
              <td><strong>Population:</strong></td>
              <td>?</td>
              <td><img className="table-images" src={Pop} alt="Population Image" /></td>
            </tr>
            <tr>
              <td><strong>Year of Incorporation:</strong></td>
              <td>?</td>
              <td><img className="table-images" src={Incorp} alt="Incorporation Image" /></td>
            </tr>
            <tr>
              <td><strong>Region:</strong></td>
              <td>?</td>
              <td><img className="table-images" src={Flag} alt="Flag Image" /></td>
            </tr>
            <tr>
              <td><strong>Classification:</strong></td>
              <td>?</td>
              <td><img className="table-images" src={Class} alt="Classification Image" /></td>
            </tr>
            <tr>
              <td><strong>Average Income Level:</strong></td>
              <td>?</td>
              <td><img className="table-images" src={Income} alt="Income Image" /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p>Links to local resources: <a href="?" target="_blank" rel="noopener noreferrer">?</a></p>
      </aside>
    </div>
  );
};

export default Houston;