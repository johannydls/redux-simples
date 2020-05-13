import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import Card from './Card';

function Media(props) {
  console.log(props);

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
  );
}

function mapStateToProps({numeros}) {
  return {
    min: numeros.min,
    max: numeros.max
  }
}

// function mapStateToProps2(state) {
//   return {
//     min: state.numeros.min,
//     max: state.numeros.max,
//     nomes: state.nomes,
//     primeiroNome: state.nomes[0]
//   }
// }

export default connect(mapStateToProps)(Media);