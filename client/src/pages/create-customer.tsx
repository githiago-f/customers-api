import React from 'react';
import { BackArrow } from '../components/BackArrow';
export const CreateCustomer = () => {
  return (
    <>
      <h2>
        <BackArrow to={'/'}/>
        Criar cliente
      </h2>
    </>
  );
};
