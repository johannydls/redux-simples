import React from 'react';

import './Intervalo.css';

import Card from './Card';

export default props => {

  return (
    <Card title="Sorteio de um Número" purple>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{7}</strong>
        </span>
      </div>
    </Card>
  )
}