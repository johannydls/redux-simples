import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import { changeMin, changeMax } from '../store/actions/numeros';

import Card from './Card';

function Intervalo(props) {

  const { min, max } = props;
  
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input 
            type="number" 
            value={min}
            onChange={e => props.alterarMinimo(+e.target.value)} 
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={max} 
            onChange={e => props.alterarMaximo(+e.target.value)} 
          />
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

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator - retorna uma action
      const action = changeMin(novoNumero);
      dispatch(action); // Notifica os reducers
    },
    alterarMaximo(novoNumero) {
      // Action Creator - retorna uma action
      const action = changeMax(novoNumero);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo);