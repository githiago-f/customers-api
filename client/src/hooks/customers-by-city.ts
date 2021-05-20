import { useCallback, useEffect, useRef, useState } from 'react';
import { Customer } from 'portfolio-domain';
import { customersByCity } from 'api/customers-api';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'api/socket';

type Props = {
  city_id?:string;
}

export const useLoadCustomersByCity = () => {
  const {current:connection} = useRef(connect());
  const {params: {city_id}} = useRouteMatch<Props>();
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([] as Customer[]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const load = () => customersByCity(city_id||'0')
      .then((res) => {
        setCustomers(res.results);
        setPages(res.pages);
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    connection.on('alterated customers', () => {
      load();
    });
    load();
  }, []);

  const loadMore = useCallback((page: number) => {
    customersByCity(city_id||'0', page)
      .then(res => {
        setCustomers(res.results);
      })
      .catch();
  }, [customers]);

  return {
    customers,
    loading,
    pages,
    loadMore
  };
};
