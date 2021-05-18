import React from 'react';
import { Customer } from 'portfolio-domain';
import { Link } from 'react-router-dom';

export const CustomerComponent = (props: Customer) => (
  <Link to={`/customer/${props.id}`} className="customer-card">
    <div className="w-24">
      <img
        src={`https://via.placeholder.com/64x64?text=${props.first_name}`}
        alt={`profile of ${props.email}`}
        className="rounded-l-md w-full h-full"
      />
    </div>
    <div className="info">
      <h4>
        <small title={props.email}>{props.email}</small>
      </h4>
      <h3 data-testid="customer-name">{props.first_name + ' ' + props.last_name}</h3>
      <h4>
        <small>{props.company}</small>
      </h4>
    </div>
  </Link>
);
