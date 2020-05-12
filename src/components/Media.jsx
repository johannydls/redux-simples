import React from 'react';

import './Intervalo.css';

import Card from './Card';

export default props => {

  const { min, max } = props;
  const media = (max + min) / 2;

  return (
    <Card title="Média dos Números" green>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{ media }</strong>
        </span>
      </div>
    </Card>
  )
}