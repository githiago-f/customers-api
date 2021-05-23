import React from 'react';
import { Select } from 'components/Form/Inptus/select';
import { BackArrow } from '../components/BackArrow';
import { Loading } from '../components/Loading';
import { useLoadCustomerById } from '../hooks/customer-by-id';
import { TextInput } from 'components/Form/Inptus/text';

const EditCustomer = () => {
  const {
    customer,
    alterField,
    cities,
    error,
    loading,
    companies,
    updateCustomer
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
            <TextInput
              name="first_name"
              id="first_name"
              value={customer.first_name}
              onChange={alterField}
              label="Primeiro nome:"
            />
            <TextInput
              name="last_name"
              id="last_name"
              value={customer.last_name}
              onChange={alterField}
              label="Sobrenome:"
            />
            <TextInput
              name="email"
              onChange={alterField}
              value={customer.email}
              id="email"
              label="E-mail:"
            />
            <Select
              id="city"
              label="Cidade"
              name="city"
              options={cities.map(i=>({key:i.id,label:i.name}))}
              onChange={alterField}
              value={customer.city}
            />
            <Select
              label="Empresa:"
              name="company"
              id="company"
              options={companies.map(i=>({key:i.id,label:i.name}))}
              onChange={alterField}
              value={customer.company}
            />
            <TextInput
              label="Titulação:"
              id="titulation"
              name="titulation"
              onChange={alterField}
              value={customer.titulation}
            />
            <div data-testid="gender-container">
              <label htmlFor="gender">Gênero:</label>
              <div className="flex flex-col">
                <label htmlFor="male">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    radioGroup="gender"
                    onChange={alterField}
                    value="male"
                  />&nbsp;
                  Masculino
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    name="gender"
                    radioGroup="gender"
                    id="female"
                    onChange={alterField}
                    value="female"
                  />&nbsp;
                  Feminino
                </label>
                <label htmlFor="uninformed">
                  <input
                    type="radio"
                    name="gender"
                    radioGroup="gender"
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
              <button className="submit" onClick={updateCustomer} type="submit">
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
