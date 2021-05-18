import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import { CustomerComponent } from 'components/Cards/Customer';
import { Customer } from 'portfolio-domain';
import { TLQueries } from '../../../types/helper';

describe('# CustomerComponent', () => {
  let result: RenderResult<TLQueries>;
  beforeEach(() => {
    const customer = Customer({
      id: 5,
      first_name: 'Thiago',
      last_name: 'Dutra',
      email: 'tfarias@gmail.com',
      gender: 'male',
      titulation: 'Sr Developer'
    });
    result = render(
      <MemoryRouter>
        <CustomerComponent {...customer} />
      </MemoryRouter>
    );
  });

  describe('.render', () => {
    it('will render exactly', () => {
      expect(result).toMatchSnapshot();
    });
    it('will contain customer\'s name in a h3', async () => {
      const customerName = await screen.findByTestId('customer-name');
      expect(customerName).toHaveTextContent('Thiago Dutra');
      expect(result.baseElement).toContainElement(customerName);
      expect(customerName.tagName).toBe('H3');
    });
  });
});
