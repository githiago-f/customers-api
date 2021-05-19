import { createCustomer } from 'api/customers-api';
import { getAllCities, getAllCompanies } from 'api/utils-api';
import { City, Company, CustomerDTO } from 'portfolio-domain';
import React, { useCallback, useEffect, useState } from 'react';

type Event = React.ChangeEvent<HTMLInputElement|HTMLSelectElement>;

export const useCreateCustomer = () => {
  const [cities, setCities] = useState([] as City[]);
  const [companies, setCompanies] = useState([] as Company[]);
  const [customer, setCustomer] = useState({
    city: 0,
    company: 0
  } as CustomerDTO);
  const [error, setError] = useState(null as {message:string}|null);

  const alterField = useCallback((e: Event) => {
    const draft = {...customer} as Record<string, unknown>;
    draft[e.target.name] = e.target.value;
    setCustomer(draft as CustomerDTO);
  }, [customer]);

  useEffect(() => {
    Promise.all([getAllCities(), getAllCompanies()])
      .then(e=> {
        setCities(e[0]);
        setCompanies(e[1]);
      })
      .catch(console.error);
  }, []);

  const create = useCallback((e) => {
    e.preventDefault();
    createCustomer(customer)
      .then(({status, data}) => {
        if(status === 201) {
          window.location.href = '/customers-api';
          return;
        }
        setError(data);
      })
      .catch(e => {
        if(/409/.test(e.message)) {
          setError({
            message: 'Costumer email already created!'
          });
        }
      });
  }, [customer]);

  return {
    alterField,
    customer,
    cities,
    companies,
    create,
    error
  };
};
