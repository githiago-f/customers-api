import React from 'react';
import {Link} from 'react-router-dom';

export const BackArrow = ({to}: {to: string}) => (
  <Link to={to}>
    <small className="text-indigo-400"> &larr; voltar </small> &nbsp;
  </Link>
);
