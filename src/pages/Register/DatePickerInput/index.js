import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name, onChangeDate }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        autoComplete="off"
        name={fieldName}
        selected={selected}
        onChange={date => onChangeDate(date, setSelected(date))}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
