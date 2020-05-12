import React from 'react';

import './Intervalo.css';

import Card from './Card';

export default props => {

  return (
    <Card title="Soma dos Números" blue>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{ 10 }</strong>
        </span>
      </div>
    </Card>
  )
}