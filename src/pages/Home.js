import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'reactstrap';
import '../App.css';
import Flag from '../images/Flag.webp';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="App">
      {/* head and title using Helmet component tags for SEO optimization*/}
      <Helmet>
        <title>Texas - The Lone Star State</title>
        <meta name="description" content="Texas, the Lone Star State, is known for its history, diverse culture, and expansive landscapes." />
      </Helmet>
      {/* Page Header */}
      <header>
        <h1>Welcome to Texas</h1>
      </header>

      {/* Navigation */}
      <h2>Take a look at the Capital or Cities</h2>
      <nav className="top-nav">
        <NavLink className="App-link" to="/capital">Capital</NavLink> |
        <NavLink className="App-link" to="/dallas"> Dallas</NavLink> |
        <NavLink className="App-link" to="/houston"> Houston</NavLink>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Image with alternative text and CSS styling with className*/}
        <img className="images" src={Flag} alt="Texas Flag" />

        {/* Bootstrap Card for styling */}
        <Card>
          {/* Section Content */}
          <section>
            <p>Texas, the Lone Star State, is the second-largest state in the United States.</p>
            <h2>Significant Historical Events in Texas</h2>

            {/* Ordered list */}
            <ol className="custom-list">
              <li>1836: Texas declares independence from Mexico.</li>
              <li>1845: Texas becomes the 28th state of the United States.</li>
              <li>1861: Texas secedes from the Union and joins the Confederacy.</li>
              <li>1870: Texas is readmitted to the Union after the Civil War.</li>
              <li>1901: The Spindletop oil field is discovered, marking the beginning of the Texas oil boom.</li>
            </ol>
          </section>
        </Card>

        {/* Aside Content */}
        <aside>
          <h2>Additional Information</h2>
          {/* Unordered List */}
          <ul className="custom-list">
            <li><strong>Capital:</strong> <NavLink to="/capital">Austin</NavLink></li>
            <li><strong>State bird:</strong> Mockingbird</li>
            <li><strong>State Flower:</strong> Bluebonnet</li>
          </ul>
          <p>Links to state resources: <a href="https://www.tsl.texas.gov/exhibits/texas175/declaration" target="_blank" rel="noopener noreferrer">Resource Link for Historical Events</a> | <a href="https://www.texas.gov/" target="_blank" rel="noopener noreferrer">Texas.gov</a></p>
        </aside>
      </main>
    </div>
  );
};

export default Home;
