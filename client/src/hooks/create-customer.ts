import { createCustomer } from 'api/customers-api';
import { getAllCities, getAllCompanies } from 'api/utils-api';
import { City, Company, Customer, CustomerDTO } from 'portfolio-domain';
import React, { useCallback, useEffect, useState } from 'react';
import { createCitySelector, createCompanySelector } from './utils/createSelect';

type Event = React.ChangeEvent<HTMLInputElement|HTMLSelectElement>;

export const useCreateCustomer = () => {
  const [cities, setCities] = useState([] as City[]);
  const [companies, setCompanies] = useState([] as Company[]);
  const [customer, setCustomer] = useState({} as CustomerDTO);
  const [error, setError] = useState(null as {message:string}|null);

  const alterField = useCallback((e: Event) => {
    const draft = {...customer} as Record<string, unknown>;
    draft[e.target.name] = e.target.value;
    setCustomer(draft as CustomerDTO);
  }, [customer]);

  useEffect(() => {
    Promise.all([getAllCities(), getAllCompanies()])
      .then(([cities, companies]) => {
        setCities(createCitySelector(cities));
        setCompanies(createCompanySelector(companies));
      })
      .catch(setError);
  }, []);

  const create = useCallback(async (e) => {
    e.preventDefault();
    try {
      const validCustomer = Customer(customer);
      const {status} = await createCustomer(validCustomer);
      if(status === 201) {
        window.location.href = '/customers-api';
      }
    } catch (e) {
      if(e.response) {
        setError(e.response.data);
        return;
      }
      setError(e);
    }
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
