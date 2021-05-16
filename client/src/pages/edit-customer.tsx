import React from 'react';
import { BackArrow } from '../components/BackArrow';
import { Loading } from '../components/Loading';
import { useLoadCustomerById } from '../hooks/customer-by-id';
export const EditCustomer = () => {
  const {
    customer,
    loading
  } = useLoadCustomerById();

  return (
    <>
      <h2>
        <BackArrow to={`/customers/at/${customer?.city}`}/>
        Editar cliente
      </h2>
      <div hidden={!loading}>
        <Loading/>
      </div>
      <div>
        <h3>Formulário para editar cliente.</h3>
      </div>
    </>
  );
};
