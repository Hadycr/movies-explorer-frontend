import React from 'react';
import { Link } from 'react-router-dom'; 
import './PageNotFound.css'; 

function PageNotFound () { 
  return ( 
    <main className="page-not-found"> 
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link className="page-not-found__button" to="/">Назад</Link> 
    </main> 
  ) 
} 

export default PageNotFound; 

