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
import Sumary from '../../Components/Sumary'

// Context
import { CartContext } from '../../Context/cart'

const Cart: React.FC = () => {
  const params: cartParamsProps = useParams()
  const contentId = params.id

  React.useEffect(() => {
    // Faz o get do produto
  }, [contentId])

  
  const cartContext = React.useContext(CartContext)
  return <>
    <CardContainer>
      <section id="cart" >
        <h1>Meu carrinho</h1>
        <main>
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => cartContext.handleRemoveItemToCart(1)}
            title="ASMR"
            description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
            image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            value="R$ 5/min"
            rate={4}
            type="sexo"
            category="orgia"
            id={1}
            />
        </main>
      </section>
      <Sumary
        items={3}
        subvalue={160.00}
        discount={30}
        finalvalue={112.00}
        buttonsDisplayed />

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
        id={1} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1} />
    </Box>
  </>
}

export default Cart;