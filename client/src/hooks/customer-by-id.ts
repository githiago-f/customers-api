import { getAllCities, getAllCompanies } from 'api/utils-api';
import { updateCustomer } from 'api/customers-api';
import { City, Company, Customer } from 'portfolio-domain';
import { useEffect, useState, useCallback } from 'react';
import { useRouteMatch } from 'react-router';
import { customerById } from '../api/customers-api';

type Props = {
  id?: string;
}

type Event = React.ChangeEvent<HTMLInputElement|HTMLSelectElement>;

export const useLoadCustomerById = () => {
  const {params:{id}} = useRouteMatch<Props>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([] as City[]);
  const [companies, setCompanies] = useState([] as Company[]);
  const [customer, setCustomer] = useState({} as Customer);
  const [error, setError] = useState(null as {message:string}|null);

  const alterField = useCallback((e: Event) => {
    const draft = {...customer} as Record<string, unknown>;
    draft[e.target.name] = e.target.value;
    setCustomer(draft as Customer);
  }, [customer]);

  useEffect(() => {
    Promise.all([
      getAllCities(),
      getAllCompanies(),
      customerById(id as string)
    ])
      .then(e=> {
        setCities(e[0]);
        setCompanies(e[1]);
        setCustomer(e[2]);
      })
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, []);

  const update = useCallback((e) => {
    e.preventDefault();
    updateCustomer(customer)
      .then(({status, data}) => {
        if(status === 202) {
          window.location.href = '/customers-api';
          return;
        }
        setError(data);
      })
      .catch(e => {
        console.log(customer);
        if(/409/.test(e.message)) {
          setError({
            message: 'Costumer email already created!'
          });
        }
      });
  }, [customer]);

  return {
    customer,
    loading,
    alterField,
    companies,
    cities,
    error,
    update
  };
};
