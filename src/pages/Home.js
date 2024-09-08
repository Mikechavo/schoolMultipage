import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'reactstrap';
import '../App.css';
import Taniti from '../images/taniti.jpg';
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
        <h1>Welcome to Taniti Island</h1>
      </header>


      {/* Main Content */}
      <main className="main-content">
        {/* Image with alternative text and CSS styling with className*/}
        <img className="images" src={Taniti} alt="Island" />

        {/* Bootstrap Card for styling */}
        <Card>
          {/* Section Content */}
          <section>
            <h2>About the Island</h2>

           <p>Taniti is a small tropical island in the Pacific, covering less than 500 square miles. Despite its size, the island boasts diverse terrain, featuring sandy and rocky beaches, a secure harbor, lush tropical rainforests, and a mountainous interior with a small, active volcano. Taniti is home to an indigenous population of approximately 20,000 people. Before the recent surge in tourism, the island's economy was primarily driven by fishing and agriculture.</p>
          </section>
        </Card>

        {/* Aside Content */}
        <aside>
          <h2>Additional Information</h2>
          {/* Unordered List */}
          <ul className="custom-list">
            <li> <NavLink to="/todo">Things to do</NavLink></li>
            <li><NavLink to="/lodging">Lodging</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/people">People Data</NavLink></li>
            <li><NavLink to="/freq">Frequently Requested Information</NavLink></li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Home;
