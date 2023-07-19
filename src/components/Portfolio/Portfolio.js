import React from 'react';
import './Portfolio.css';

function Portfolio({siteType, siteAdress}) {

  return (
    <a
    className="portfolio"
    href={siteAdress}
    >
      <p className="portfolio__site-name">{siteType}</p>
      <div className="profile__link-icon"></div>
    </a>
   )
}

export default Portfolio;