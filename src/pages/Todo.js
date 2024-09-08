import React from 'react';
import '../App.css';

import Income from '../images/income.jpg';
import Zip from '../images/zip.webp';
import { Helmet } from 'react-helmet';


const Todo = () => {
  return (
    <div>
      {/* head and title using Helmet component tags for SEO optimization*/}
      <Helmet>
        <title>Things to do in Taniti</title>
        <meta name="description" content="Tourist entertainment entertainment in Taniti " />
      </Helmet>
      <section>
        <h2><strong>Things to do in Taniti</strong></h2>
        <img className="images" src={Zip} alt="ziplining" />
        <p>Taniti is a small island with a lot of things to do.</p>
      </section>
      {/* Aside Content with table inside */}
      <aside>
        <table className="city-stats">
          <tbody>
            <tr>
              <td><strong>Restaurants:</strong></td>
              <td>Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.</td>
            </tr>
            <tr>
              <td><strong>Grocery Stores:</strong></td>
              <td>Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. </td>
            </tr>
            <tr>
              <td><strong>Lodging:</strong></td>
              <td>Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government. </td>
            </tr>
           
            <tr>
              <td><strong>Entertainment:</strong></td>
              <td>Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. </td>             
            </tr>
            <tr>
              <td><strong>Sightseeing:</strong></td>
              <td>Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.</td>
            </tr>
            <tr>
              <td><strong>Transportation:</strong></td>
              <td> Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. </td>
            </tr>
            <tr>
              <td><strong>Ground Transportation:</strong></td>
              <td>Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p>Links to local resources: <a href="https://westerngovernorsuniversity.sharepoint.com/sites/WebTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebTeam%2FShared%20Documents%2FLRs%2FD479&viewid=4e40b450%2Dc3d5%2D449c%2D8ceb%2D804075f9c336" target="_blank" rel="noopener noreferrer">WGU Sharepoint</a></p>
      </aside>
    </div>
  );
};

export default Todo;