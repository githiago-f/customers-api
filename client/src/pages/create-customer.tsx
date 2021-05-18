import { useCreateCustomer } from 'hooks/create-customer';
import React from 'react';
import { BackArrow } from '../components/BackArrow';

const CreateCustomer = () => {
  const {
    customer,
    alterField,
    cities,
    companies } = useCreateCustomer();
  return (
    <>
      <h2>
        <BackArrow to={'/'}/>
        Criar cliente
      </h2>
      <div className="px-2 mx-auto max-w-sm">
        <form action="/customer" method="post" className="grid grid-flow-row" onSubmit={()=>false}>
          <div data-testid="first_name-container">
            <label htmlFor="first_name">Primeiro nome:</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={customer.first_name}
              onChange={alterField}
            />
          </div>
          <div data-testid="last_name-container">
            <label htmlFor="last_name">Segundo nome:</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={customer.last_name}
              onChange={alterField}
            />
          </div>
          <div data-testid="city-container">
            <label htmlFor="city">Cidade: </label>
            <select onChange={alterField} name="city" id="city">
              <option value="0">Selecione uma cidade</option>
              {cities.map(i=>(
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </select>
          </div>
          <div data-testid="company-container">
            <label htmlFor="company">Empresa: </label>
            <select onChange={alterField} name="company" id="company">
              <option value="0">Selecione uma empresa</option>
              {companies.map(i=>(
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </select>
          </div>
          <div data-testid="titulation-container">
            <label htmlFor="titulation">Titulação:</label>
            <input
              type="text"
              name="titulation"
              id="titulation"
              value={customer.titulation}
              onChange={alterField}
            />
          </div>
          <div data-testid="gender-container">
            <label htmlFor="gender">Gênero:</label>
            <div className="flex flex-col">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />&nbsp;
                Masculino
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />&nbsp;
                Feminino
              </label>
              <label htmlFor="uninformed">
                <input
                  type="radio"
                  name="gender"
                  id="uninformed"
                  value="uninformed"
                />&nbsp;
                Não informar
              </label>
            </div>
          </div>
          <div data-testid="submit-container">
            <button className="submit" type="submit">
              Criar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCustomer;
