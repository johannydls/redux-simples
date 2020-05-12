import React from 'react';

import './Intervalo.css';

import Card from './Card';

export default props => {

  const { min, max } = props;
  const soma = max + min;

  return (
    <Card title="Soma dos Números" blue>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{ soma }</strong>
        </span>
      </div>
    </Card>
  )
}