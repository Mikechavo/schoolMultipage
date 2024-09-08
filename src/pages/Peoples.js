import React from 'react'
import '../App.css'
import Pop from '../images/population.jpg';
import People from '../images/persona.png';
import Dataim from '../images/dataimage.png';



import { Helmet } from 'react-helmet';

const Peoples = () => {

    return (
      <div>
        {/* head and title using Helmet component tags for SEO optimization*/}
        <Helmet>
          <title>People and Data Survey Results</title>
          <meta name="description" content="Results for people visiting Taniti " />
        </Helmet>
        <section>
         <u><h2><strong>People and Data Survey Results</strong></h2></u>
          <p>There are all kinds of people that love coming to Taniti!</p>
          <p>Thanks to participants of our survey we can some some insights with you😊</p>
          <h3><strong>One of our survey participants</strong></h3>
          <img className="" src={People} alt="persona" />
        </section>
        {/* Aside Content with table inside */}
        <h3><strong>Authorized Data From Our Survey</strong></h3>
        <aside>
          <table className="city-stats">
            <tbody>
              <tr>
                <td><img src={Dataim} alt="Survey Data" /></td>
              </tr>
              
            </tbody>
          </table>
          <p>Links to local resources: <a href="https://westerngovernorsuniversity.sharepoint.com/sites/WebTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebTeam%2FShared%20Documents%2FLRs%2FD479&viewid=4e40b450%2Dc3d5%2D449c%2D8ceb%2D804075f9c336" target="_blank" rel="noopener noreferrer">WGU Sharepoint</a></p>
        </aside>
      </div>
    );
  };

export default Peoples;