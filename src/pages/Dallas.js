import React from 'react'
import '../App.css'
const Dallas = () => {



 return (
 
   <div>
    <header>
        <h1>Dallas</h1>
      </header>
     {/* Section Content */}
     <section>
       <h2>Information about Dallas</h2>
       <p>?</p>
       <h3>History</h3>
       <p>Founded in ?</p>
       <h3>Landmarks</h3>
       <ul className="custom-list">
         <li>?</li>
         <li>?</li>
         <li>?</li>
       </ul>
     </section>

     {/* Aside Content */}
     <aside>
       <h2>City Statistics</h2>
       <ul className="custom-list">
         <li><strong>Population:</strong> ?</li>
         <li><strong>Area:</strong> ?</li>
       </ul>
       <p>Links to local resources: <a href="#">?</a> | <a href="#">?</a></p>
     </aside>
   </div>
 );
};

export default Dallas;