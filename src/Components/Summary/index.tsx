import React from 'react';

import { SumaryContainer } from './styles';

// components
import Button from '../Button/index'

// @types
import { SumaryProps, SumaryDataProps } from '../../@types/Sumary'

// context
import { CartContext } from '../../Context/Cart';


const Summary: React.FC<SumaryProps> = ({ buttonsDisplayed }) => {
  const cartContext = React.useContext(CartContext)
  const [summary, setSummary] = React.useState<SumaryDataProps>({
    subvalue: 0,
    discount: 0,
    finalvalue: 0,
    items: 0
  })

  async function getSummaryData() {
    const summary = await cartContext.getCartReport()
    setSummary(summary[1])
  }

  React.useEffect(() => {
    getSummaryData()
  }, [])

  const subValueRef = summary.subvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const discountRef = summary.discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const finalValueRef = summary.finalvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return <SumaryContainer buttonsDisplayed={buttonsDisplayed}>
     <h1>Resumo da compra</h1>
        <main>
          <div>
            <ol>
              <li>
                <span>Subtotal ({summary.items} itens)</span><span>{subValueRef}</span>
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

export default Summary