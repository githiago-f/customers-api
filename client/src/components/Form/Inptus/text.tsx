import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  name: string;
  value?: string;
}

export const TextInput = (props:Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        id={props.id}
        defaultValue={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
