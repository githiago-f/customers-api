import React from 'react';
import { CustomersInCity } from 'portfolio-domain';
import {Link} from 'react-router-dom';
import location from '../../../assets/img/location.svg';

export const TotalInCity = ({ city, customers_total }: CustomersInCity) => (
  <Link to={'/customers/at/' + city}>
    <div className="customer-card">
      <div className="w-40">
        <img src={location} alt="Location icon" />
      </div>
      <div className="total-in-city">
        <span className="text-indigo-500">{city}</span><br />
        <span>Clientes: {customers_total}</span>
      </div>
    </div>
  </Link>
);
