import React, { useEffect, useContext } from 'react';
import { DesignerContext } from './DesignerProvider';

export const DesignerSelect = props => {
  const { value, onChange, name, placeholder } = props;

  const { designers, getDesigners } = useContext(DesignerContext);

  useEffect(() => {
    getDesigners();
  }, []);

  return (
    <select name={name} value={value || 0} onChange={onChange}>
      <option value="0" disabled>{placeholder}</option>
      {
        designers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)
      }
    </select>
  )
};