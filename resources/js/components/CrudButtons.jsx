import React from 'react';
import CrudButton from './CrudButton';

const CrudButtons = ({ onCreate, onRead, onUpdate, onDelete }) => (
  <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
    <CrudButton onClick={onCreate}>Create</CrudButton>
    <CrudButton onClick={onRead}>Read</CrudButton>
    <CrudButton onClick={onUpdate}>Update</CrudButton>
    <CrudButton onClick={onDelete}>Delete</CrudButton>
  </div>
);

export default CrudButtons;
