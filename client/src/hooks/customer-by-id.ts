import { getAllCities, getAllCompanies } from 'api/utils-api';
import { updateCustomer } from 'api/customers-api';
import { City, Company, Customer, CustomerDTO } from 'portfolio-domain';
import { useEffect, useState, useCallback } from 'react';
import { useRouteMatch } from 'react-router';
import { customerById } from '../api/customers-api';
import { createCitySelector, createCompanySelector } from './utils/createSelect';

type Props = {
  id: string;
}

type Event = React.ChangeEvent<HTMLInputElement|HTMLSelectElement>;

export const useLoadCustomerById = () => {
  const {params:{id}} = useRouteMatch<Props>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([] as City[]);
  const [companies, setCompanies] = useState([] as Company[]);
  const [customer, setCustomer] = useState({} as CustomerDTO);
  const [error, setError] = useState(null as {message:string}|null);

  const alterField = useCallback((event: Event) => {
    const draft = {...customer} as Record<string, unknown>;
    draft[event.target.name] = event.target.value;
    setCustomer(draft as CustomerDTO);
  }, [customer]);

  useEffect(() => {
    Promise.all([
      getAllCities(),
      getAllCompanies(),
      customerById(id)
    ])
      .then((data) => {
        const [
          allCities,
          allCompanies,
          existentCustomer] = data;
        setCities(createCitySelector(allCities));
        setCompanies(createCompanySelector(allCompanies));
        setCustomer(existentCustomer as CustomerDTO);
      })
      .catch(console.error)
      .finally(()=>setLoading(false));
  }, []);

  const updateCustomer = useCallback(async (event) => {
    event.preventDefault();
    try {
      const validCustomer = Customer(customer as CustomerDTO);
      await updateCustomer(validCustomer);
      window.location.href = '/customers-api';
    } catch (error) {
      if(error.response) {
        setError(error.response.data);
        return;
      }
      setError(error);
    }
  }, [customer]);

  return {
    customer,
    loading,
    alterField,
    companies,
    cities,
    error,
    updateCustomer
  };
};
