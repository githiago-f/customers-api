import React from 'react';
import { BackArrow } from '../components/BackArrow';
import { TotalInCity } from '../components/Cards/TotalInCity';
import { Loading } from '../components/Loading';
import { useLoadAllCities } from '../hooks/load-all-cities';

const CityList = () => {
  const {cityCustomers, loading} = useLoadAllCities();
  return (
    <>
      <h2 className="pl-3">
        Cidades
      </h2>
      <div className="customer-list" hidden={loading}>
        {cityCustomers.map((i, indx) => (
          <TotalInCity key={indx} {...i}/>
        ))}
      </div>
      <div hidden={!loading}>
        <Loading/>
      </div>
    </>
  );
};

export default CityList;
