import React from 'react'
import '../App.css'
import Q from '../images/Q.jpg';

import { Helmet } from 'react-helmet';

const Freq = () => {

    return (
      <div>
        {/* head and title using Helmet component tags for SEO optimization*/}
        <Helmet>
          <title>Frequently Requested Information</title>
          <meta name="description" content="Tourist entertainment entertainment in Taniti " />
        </Helmet>
        <section>
          <h2><strong>Frequently Requested Information</strong></h2>
          <img className="images" src={Q} alt="Question" />
        </section>
        {/* Aside Content with table inside */}
        <aside>
          <table className="city-stats">
            <tbody>
              <tr>
                <td><strong>Power outlets are 120 volts (the same as in the United States) </strong></td>
              </tr>
              <tr>
                <td><strong>Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. </strong></td>
              </tr>
              <tr>
                <td><strong>The drinking age on Taniti is 18 and the drinking age is not strictly enforced.</strong></td>
              </tr>
              <tr>
                <td><strong>Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.</strong></td>
              </tr>
              <tr>
                <td><strong>There is one hospital and several clinics. The hospital has many multilingual employees.</strong></td>
              </tr>
              <tr>
                <td><strong>Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</strong></td>
              </tr>
              <tr>
                <td><strong>Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.</strong></td>
              </tr>
              <tr>
                <td><strong>Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.</strong></td>
              </tr>
             
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <p>Links to local resources: <a href="https://westerngovernorsuniversity.sharepoint.com/sites/WebTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebTeam%2FShared%20Documents%2FLRs%2FD479&viewid=4e40b450%2Dc3d5%2D449c%2D8ceb%2D804075f9c336" target="_blank" rel="noopener noreferrer">WGU Sharepoint</a></p>
        </aside>
      </div>
    );
  };

export default Freq;