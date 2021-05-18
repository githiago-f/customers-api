import { getAllCities, getAllCompanies } from 'api/utils-api';
import { City, Company, CustomerDTO } from 'portfolio-domain';
import React, { useCallback, useEffect, useState } from 'react';

type Event = React.ChangeEvent<HTMLInputElement|HTMLSelectElement>;

export const useCreateCustomer = () => {
  const [cities, setCities] = useState([] as City[]);
  const [companies, setCompanies] = useState([] as Company[]);
  const [customer, setCustomer] = useState({} as CustomerDTO);

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

  return {
    alterField,
    customer,
    cities,
    companies
  };
};
