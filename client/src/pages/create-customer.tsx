import React from 'react';
import { BackArrow } from '../components/BackArrow';

const CreateCustomer = () => {
  return (
    <>
      <h2>
        <BackArrow to={'/'}/>
        Criar cliente
      </h2>
    </>
  );
};

export default CreateCustomer;
