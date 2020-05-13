import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import Card from './Card';

function Sorteio(props) {

  const { max, min } = props;
  const sorteio = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um Número" purple>
      <div className="Operation">
        <span>
          <span>Resultado:</span>
          <strong>{sorteio}</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps({numeros}) {
  return {
    min: numeros.min,
    max: numeros.max
  }
}

export default connect(mapStateToProps)(Sorteio);