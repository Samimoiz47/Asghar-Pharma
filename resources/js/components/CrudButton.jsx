import React from 'react';
import './CrudButton.css';

const CrudButton = ({ children, ...props }) => (
  <button className="button" {...props}>{children}</button>
);

export default CrudButton;
