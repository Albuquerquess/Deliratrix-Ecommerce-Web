import React from 'react';

// styles
import { ConfirmationContainer } from './styles';

// assets
import Thanks from '../../Assets/Pages/Confirmation/thanks.svg'

// components
import Box from '../../Components/Box'
import Card from '../../Components/Card'

const Confirmation: React.FC = () => {
  return <>
  <ConfirmationContainer>
     <main>
        <h1>Muito obrigada por chegar até aqui!</h1>
        <h2>Logo seu pedido será enviado por email.</h2>
        <img src={Thanks} alt="muito obrigado" />
        <span>Agora você poderá despertar a chama dos seus fetiches mais intensos.</span>
     </main>
  </ConfirmationContainer>
  <Box title="Novos conteúdos">
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

export default Confirmation;