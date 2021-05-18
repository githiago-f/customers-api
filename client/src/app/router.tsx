import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Fab } from 'components/FAB';

const CityList = lazy(() => import('../pages/city-list'));
const CustomersAtCity = lazy(() => import('../pages/customers-at-city'));
const CreateCustomer = lazy(() => import('../pages/create-customer'));
const EditCustomer = lazy(() => import('../pages/edit-customer'));

export const Routes = () => (
  <Router basename='customers-api'>
    <Suspense fallback={<Loading/>}>
      <Route path="/" exact>
        <CityList/>
      </Route>
      <Route path='/customers/at/:city_id'>
        <CustomersAtCity/>
      </Route>
      <Route exact path='/customer'>
        <CreateCustomer/>
      </Route>
      <Route exact path="/customer/:id">
        <EditCustomer/>
      </Route>
      <Fab/>
    </Suspense>
  </Router>
);
