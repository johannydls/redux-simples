import React from 'react';

import './Intervalo.css';
import { connect } from 'react-redux';

import Card from './Card';

function Intervalo(props) {

  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} readOnly/>
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly/>
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

export default connect(mapStateToProps)(Intervalo);