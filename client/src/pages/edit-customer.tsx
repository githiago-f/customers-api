import React from 'react';
import { BackArrow } from '../components/BackArrow';
import { Loading } from '../components/Loading';
import { useLoadCustomerById } from '../hooks/customer-by-id';

const EditCustomer = () => {
  const {
    customer,
    alterField,
    cities,
    error,
    loading,
    companies,
    update
  } = useLoadCustomerById();

  return (
    <>
      <div hidden={!loading}>
        <Loading/>
      </div>
      <div hidden={loading}>
        <h2>
          <BackArrow to={'/'}/>
          Editar cliente {customer.email||''}
        </h2>
        <div className="px-2 mx-auto mb-10 max-w-sm">
          <form action="/customer" method="post" className="grid grid-flow-row" onSubmit={()=>false}>
            <div data-testid="first_name-container">
              <label htmlFor="first_name">Primeiro nome:</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                defaultValue={customer.first_name}
                onChange={alterField}
              />
            </div>
            <div data-testid="last_name-container">
              <label htmlFor="last_name">Segundo nome:</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                defaultValue={customer.last_name}
                onChange={alterField}
              />
            </div>
            <div data-testid="email-container">
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={customer.email}
                onChange={alterField}
              />
            </div>
            <div data-testid="city-container">
              <label htmlFor="city">Cidade: </label>
              <select onChange={alterField} defaultValue={customer.city} name="city" id="city">
                <option value="0">Selecione uma cidade</option>
                {cities.map(i=>(
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
            </div>
            <div data-testid="company-container">
              <label htmlFor="company">Empresa: </label>
              <select
                onChange={alterField}
                defaultValue={customer.company}
                name="company"
                id="company"
              >
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
                defaultValue={customer.titulation}
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
                    defaultValue={customer.gender}
                    onChange={alterField}
                    value="male"
                  />&nbsp;
                  Masculino
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    defaultValue={customer.gender}
                    onChange={alterField}
                    value="female"
                  />&nbsp;
                  Feminino
                </label>
                <label htmlFor="uninformed">
                  <input
                    type="radio"
                    name="gender"
                    defaultValue={customer.gender}
                    id="uninformed"
                    onChange={alterField}
                    value="uninformed"
                  />&nbsp;
                  Não informar
                </label>
              </div>
            </div>
            <div className="p-2 bg-red-200 border-red-900 border-2" hidden={error===null}>
              <span className="text-black font-bold">{error?.message||''}</span>
            </div>
            <div data-testid="submit-container">
              <button className="submit" onClick={update} type="submit">
                Alterar informações
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCustomer;
