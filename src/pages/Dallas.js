import React from 'react'
import { Helmet } from 'react-helmet'; 
import '../App.css'
import Pop from '../images/population.jpg';
import Incorp from '../images/incorp.jpg';
import Class from '../images/class.jpeg';
import Income from '../images/income.jpg';
import Flag from '../images/Flag.webp';
import dallas from '../images/dallas.jpg';

const Dallas = () => {



  return (
    <div>
      {/* head and title using Helmet component tags for SEO optimization*/}
       <Helmet>
        <title>Dallas - Known for its Modern Architecture and Historical Significance</title>
        <meta name="description" content="Dallas is known for its major corporate headquarters, vibrant arts scene, and as the historical site of President John F. Kennedy's assassination." />
      </Helmet>
      <header>
        <h1>Welcome to Dallas</h1>
      </header>
      <section>
        <h2>Information about Dallas</h2>
        <img className="images" src={dallas} alt="Dallas City Image" />
        <p>Dallas is known for its major corporate headquarters, vibrant arts scene, and as the historical site of President John F. Kennedy's assassination.</p>
        <h3>History</h3>
        <p>Founded in 1856</p>
        <h3>Landmarks</h3>
        <ul className="custom-list">
          <li>The Sixth Floor Museum</li>
          <li>Reunion Tower</li>
          <li>Dallas Arboretum</li>
        </ul>
      </section>

      <aside>
        <h3>City Statistics</h3>
        <table className="city-stats">
          <tbody>
            <tr>
              <td><strong>Population:</strong></td>
              <td>Approx. 1.3 million</td>
              <td><img className="table-images" src={Pop} alt="Population Image" /></td>
            </tr>
            <tr>
              <td><strong>Year of Incorporation:</strong></td>
              <td>1856</td>
              <td><img className="table-images" src={Incorp} alt="Incorporation Image" /></td>
            </tr>
            <tr>
              <td><strong>Region:</strong></td>
              <td>North Texas</td>
              <td><img className="table-images" src={Flag} alt="Flag Image" /></td>
            </tr>
            <tr>
              <td><strong>Classification:</strong></td>
              <td>Urban</td>
              <td><img className="table-images" src={Class} alt="Classification Image" /></td>
            </tr>
            <tr>
              <td><strong>Average Income Level:</strong></td>
              <td>Higher than the state average</td>
              <td><img className="table-images" src={Income} alt="Income Image" /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p>Links to local resources: <a href="https://www.dallasecodev.org/" target="_blank" rel="noopener noreferrer">dallasecodev.org</a></p>
      </aside>
    </div>
  );
};

export default Dallas;