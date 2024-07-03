import React from 'react'
import '../App.css'
import Pop from '../images/population.jpg';
import Incorp from '../images/incorp.jpg';
import Class from '../images/class.jpeg';
import Income from '../images/income.jpg';
import Flag from '../images/Flag.webp';
import houston from '../images/houston.jpg';
import { Helmet } from 'react-helmet';

const Houston = () => {



  return (
    <div>
      {/* head and title using Helmet component tags for SEO optimization*/}
      <Helmet>
        <title>Houston - Space, Energy, and Culture Hub</title>
        <meta name="description" content="Houston is known for being home to the NASA Johnson Space Center, a major hub of the energy industry, and its vibrant cultural scene." />
      </Helmet>
      <header>
        <h1>Welcome to Houston</h1>
      </header>
      <section>
        <h2>Information about Houston</h2>
        <img className="images" src={houston} alt="Houston City Image" />
        <p>Houston is known for being home to the NASA Johnson Space Center, a major hub of the energy industry, and its vibrant cultural scene.</p>
        <h3>History</h3>
        <p>Founded in 1837.</p>
        <h3>Landmarks</h3>
        <ul className="custom-list">
          <li>Space Center Houston</li>
          <li>Houston Museum of Natural Science</li>
          <li>The Galleria</li>
        </ul>
      </section>

      <aside>
        <h3>City Statistics</h3>
        <table className="city-stats">
          <tbody>
            <tr>
              <td><strong>Population:</strong></td>
              <td>Approx. 2.3 million</td>
              <td><img className="table-images" src={Pop} alt="Population Image" /></td>
            </tr>
            <tr>
              <td><strong>Year of Incorporation:</strong></td>
              <td>1837</td>
              <td><img className="table-images" src={Incorp} alt="Incorporation Image" /></td>
            </tr>
            <tr>
              <td><strong>Region:</strong></td>
              <td>Southeast Texas</td>
              <td><img className="table-images" src={Flag} alt="Flag Image" /></td>
            </tr>
            <tr>
              <td><strong>Classification:</strong></td>
              <td>Urban</td>
              <td><img className="table-images" src={Class} alt="Classification Image" /></td>
            </tr>
            <tr>
              <td><strong>Average Income Level: Higher than the state average</strong></td>
              <td>Higher than the state average</td>
              <td><img className="table-images" src={Income} alt="Income Image" /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p>Links to local resources: <a href="https://www.houstontx.gov/index.html" target="_blank" rel="noopener noreferrer">houstontx.gov</a></p>
      </aside>
    </div>
  );
};

export default Houston;