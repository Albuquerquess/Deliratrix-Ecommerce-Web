import React from 'react';

import { SumaryContainer } from './styles';

// components
import Button from '../../Components/Button/index'

// @types
import { SumaryProps } from '../../@types/Sumary'

const Sumary: React.FC<SumaryProps> = ({ subvalue, items, discount, finalvalue, buttonsDisplayed }) => {
  const subValueRef = subvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const discountRef = discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const finalValueRef = finalvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return <SumaryContainer buttonsDisplayed={buttonsDisplayed}>
     <h1>Resumo da compra</h1>
        <main>
          <div>
            <ol>
              <li>
                <span>Subtotal ({items} itens)</span><span>{subValueRef}</span>
              </li>
              <hr />
              <li>
                <span>Descontos</span><span>{discountRef}</span>
              </li>
              <hr />
              <li>
                <span>Valor total</span><span>{finalValueRef}</span>
              </li>
            </ol>
            <span id="button-container">
              <Button label="Escolher mais produtos" outline to="/"/>
              <Button label="Continuar" to="/identificacao"/>
            </span>
          </div>
        </main>
  </SumaryContainer>;
}

export default Sumary