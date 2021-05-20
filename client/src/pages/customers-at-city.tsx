import React from 'react';
import { CustomerComponent } from '../components/Cards/Customer';
import { useLoadCustomersByCity } from '../hooks/customers-by-city';
import { Loading } from '../components/Loading';
import { BackArrow } from '../components/BackArrow';
import { range } from 'lodash';

const CustomersAtCity = () => {
  const {
    customers,
    loading,
    pages,
    loadMore
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
      <div hidden={pages===0}>
        {range(1, pages+1).map(i=> (
          <a href="#" onClick={()=>loadMore(i)} key={i}>{i}</a>
        ))}
      </div>
    </>
  );
};

export default CustomersAtCity;
