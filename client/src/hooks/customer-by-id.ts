import { Customer } from 'portfolio-domain';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { customerById } from '../api/customers-api';

type Props = {
  id?: string;
}

export const useLoadCustomerById = () => {
  const {params:{id}} = useRouteMatch<Props>();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState(null as Customer | null);

  useEffect(() => {
    customerById(id||'0')
      .then(setCustomer)
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, []);

  return {
    customer,
    loading
  };
};
