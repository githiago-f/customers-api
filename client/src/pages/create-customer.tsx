import React from 'react';
import { useCreateCustomer } from 'hooks/create-customer';
import { BackArrow } from '../components/BackArrow';
import { TextInput } from 'components/Form/Inptus/text';
import { Select } from 'components/Form/Inptus/select';

const CreateCustomer = () => {
  const {
    customer,
    alterField,
    cities,
    companies,
    error,
    create } = useCreateCustomer();
  return (
    <>
      <h2>
        <BackArrow to={'/'}/>
        Criar cliente
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
                  onChange={alterField}
                  value="female"
                />&nbsp;
                Feminino
              </label>
              <label htmlFor="uninformed">
                <input
                  type="radio"
                  name="gender"
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
            <button className="submit" onClick={create} type="submit">
              Criar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCustomer;
