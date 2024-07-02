import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = () => {
 return (
  <div>
    {/* Header */}
    <h1>Welcome to Texas</h1>

    {/* Section Content */}
    <section>
      <p>Texas, the Lone Star State, is the second-largest state in the United States.</p>
    </section>

    {/* Aside Content */}
    <aside>
      <h2>Additional Information</h2>
      <ul>
        <li><strong>Capital:</strong> Austin</li>
        <li><strong>State bird:</strong> Mockingbird</li>
        <li><strong>State Flower:</strong> Bluebonnet</li>
      </ul>
      <p>Links to state resources: <a href="#">Resource Links</a> | <a href="#">Texas DSHS</a></p>
    </aside>
  </div>
);
};

export default Home;