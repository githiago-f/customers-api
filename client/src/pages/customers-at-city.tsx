import React from 'react';
import { CustomerComponent } from '../components/Cards/Customer';
import { useLoadCustomersByCity } from '../hooks/customers-by-city';
import { Loading } from '../components/Loading';
import { BackArrow } from '../components/BackArrow';

const CustomersAtCity = () => {
  const {
    customers,
    loading
  } = useLoadCustomersByCity();

  return (
    <>
      <h2>
        <BackArrow to={'/'}/>
        Clientes na cidade:
      </h2>
      <div hidden={!loading}>
        <Loading/>
      </div>
      <div className="customer-list" hidden={loading}>
        {customers.map((i, idx)=>(
          <CustomerComponent {...i} key={idx} />
        ))}
      </div>
    </>
  );
};

export default CustomersAtCity;
