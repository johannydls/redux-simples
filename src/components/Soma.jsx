import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import Card from './Card';

function Soma(props) {

  const { max, min } = props;
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
  );
}

function mapStateToStore({numeros}) {
  return {
    min: numeros.min,
    max: numeros.max
  }
}

export default connect(mapStateToStore)(Soma);