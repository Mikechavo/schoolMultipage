import React from 'react'
import { Helmet } from 'react-helmet'; 
import '../App.css'
import Pop from '../images/population.jpg';
import Lodge from '../images/lodge.jpg';




const Lodging = () => {



  return (
    <div>
      {/* head and title using Helmet component tags for SEO optimization*/}
       <Helmet>
        <title>Lodging in Taniti</title>
        <meta name="description" content="Lodging made easy for tourist in Taniti" />
      </Helmet>
      <section>
        <h2><strong>Lodging in Taniti</strong></h2>
        <img className="images" src={Lodge} alt="lodging in Taniti" />
        <p>Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.</p>
        <h3>Resources for booking information</h3>
        <ul className="custom-list">
          <li><a href="https://westerngovernorsuniversity.sharepoint.com/sites/WebTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebTeam%2FShared%20Documents%2FLRs%2FD479&viewid=4e40b450%2Dc3d5%2D449c%2D8ceb%2D804075f9c336" target="_blank" rel="noopener noreferrer">WGU Lodging</a></li>
          <li><a href="https://www.airbnb.com/a/stays-near/Tahiti--Windward-Islands--French-Polynesia?c=.pi0.pk1695049806_69812292921&c=.pi0.pk1695049806_69812292921&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gxO577AbK8W6FKNYDGHHe6kGBKqrB0HmkLQRD0L9SiV6yzLTpmPpmIaAsMfEALw_wcB">Air BnB</a></li>
          
        </ul>
      </section>

      <aside>
        <p>Links to local resources: <a href="https://westerngovernorsuniversity.sharepoint.com/sites/WebTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebTeam%2FShared%20Documents%2FLRs%2FD479&viewid=4e40b450%2Dc3d5%2D449c%2D8ceb%2D804075f9c336" target="_blank" rel="noopener noreferrer">WGU Sharepoint</a></p>
      </aside>
    </div>
  );
};

export default Lodging;