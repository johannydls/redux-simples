import React from 'react';

import './Intervalo.css';

import Card from './Card';

export default props => {

  const { min, max } = props;
  const valor = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um Número" purple>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{valor}</strong>
        </span>
      </div>
    </Card>
  )
}