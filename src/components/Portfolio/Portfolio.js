import React from 'react';
import './Portfolio.css';

function Portfolio({siteType, siteAdress}) {

  return (
    // <div className="portfolio__site-container">
    //   <p className="portfolio__site-name">{siteType}</p>
    //   <a className="portfolio__link link" href={siteAdress}><div className="profile__link-icon"></div></a>
    // </div>
    <a
    className="portfolio__link link"
    // target="_blank"
    href={siteAdress}
    // rel="noreferrer"
    >
    <p className="portfolio__site-name">{siteType}</p>
    <div className="profile__link-icon"></div>
    </a>
   )
}

export default Portfolio;