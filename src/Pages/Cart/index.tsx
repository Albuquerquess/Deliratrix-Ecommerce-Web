import React from 'react';
import { useParams } from 'react-router-dom'

// styles
import { CardContainer } from './styles';

// @types
import { cartParamsProps } from '../../@types/Cart'

// components
import Card from '../../Components/Card'
import Button from '../../Components/Button'
import Box from '../../Components/Box'

const Cart: React.FC = () => {
  const params: cartParamsProps = useParams()
  const contentId = params.id

  React.useEffect(() => {
    // Faz o get do produto
  }, [contentId])
  
  return <>
    <CardContainer>
      <section id="cart" >
        <h1>Meu carrinho</h1>
        <main>
          <Card
            onCartPage
            removeDisplayed
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => /* Função que remove o item do carrinho*/ alert('oi')}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            prices={ [
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
              {
                id: 1,
                price: 80,
                label: 'Label do preço'
              },
            ]} />
        </main>
      </section>
      <section id="purchase-summary">
        <h1>Resumo da compra</h1>
        <main>
          <div>
            <ol>
              <li>
                <span>Subtotal (2 itens)</span><span>R$ 160,00</span>
              </li>
              <hr />
              <li>
                <span>Descontos</span><span>R$ 160,00</span>
              </li>
              <hr />
              <li>
                <span>Valor total</span><span>R$ 160,00</span>
              </li>
            </ol>
            <span id="button-container">
              <Button label="Escolher mais produtos" outline to="/"/>
              <Button label="Continuar" to="/identificacao"/>
            </span>
          </div>
        </main>
      </section>
    </CardContainer>
    <Box title="Produtos relacionados">
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    </Box>
  </>
}

export default Cart;