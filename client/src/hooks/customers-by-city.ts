import { useEffect, useState } from 'react';
import { Customer } from 'portfolio-domain';
import { customersByCity } from '../api/customers-api';
import { useRouteMatch } from 'react-router-dom';

type Props = {
  city_id?:string;
}

export const useLoadCustomersByCity = () => {
  const {params: {city_id}} = useRouteMatch<Props>();
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([] as Customer[]);

  useEffect(() => {
    customersByCity(city_id||'0')
      .then(setCustomers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return {
    customers,
    loading
  };
};
