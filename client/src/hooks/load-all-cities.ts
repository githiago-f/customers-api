import { useEffect, useState } from 'react';
import { CustomersInCity } from 'portfolio-domain';
import { customersGroupedByCity } from '../api/customers-api';

export const useLoadAllCities = () => {
  const [loading, setLoading] = useState(true);
  const [cityCustomers, setCityCustomers] = useState([] as CustomersInCity[]);

  useEffect(() => {
    customersGroupedByCity()
      .then(setCityCustomers)
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, []);

  return {
    cityCustomers,
    loading
  };
};
