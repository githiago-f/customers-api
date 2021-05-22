import React from 'react';

export type Option = {
  key?: string|number;
  label?: string;
}

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  id: string;
  options: Option[];
  value?: string|number;
};

export const Select = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.id}
      >
        {props.options.map(i=>(
          <option key={i.key} value={i.key}>{i.label}</option>
        ))}
      </select>
    </div>
  );
};
