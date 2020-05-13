import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import { changeMin } from '../store/actions/numeros';

import Card from './Card';

function Intervalo(props) {

  const { min, max } = props;
  props.alterarMinimo(100);
  console.log(props);
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

function mapActionCreatorsToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator - retorna uma action
      const action = changeMin(novoNumero);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(Intervalo);