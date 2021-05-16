import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { CreateCustomer } from '../pages/create-customer';
import { EditCustomer } from '../pages/edit-customer';

const IndexPage = lazy(() => import('../pages'));
const CityList = lazy(() => import('../pages/city-list'));
const CustomersAtCity = lazy(() => import('../pages/customers-at-city'));

export const Routes = () => (
  <Router basename='customers-api'>
    <Suspense fallback={<Loading/>}>
      <Route exact path='/'>
        <IndexPage/>
      </Route>
      <Route path="/cities">
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
    </Suspense>
  </Router>
);
