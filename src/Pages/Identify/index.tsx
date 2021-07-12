import React from 'react';
import InputMask from "react-input-mask";

// styles
import { IdentifyContaier } from './styles';

// components
import Button from '../../Components/Button'
import Box from '../../Components/Box'
import Card from '../../Components/Card'

const Identify: React.FC = () => {
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [CPF, setCPF] = React.useState('')
  
  const [emailValidate, setEmailValidate] = React.useState('')
  
  const [oldEmail, setOldEmail] = React.useState([''])
  const [info, setInfo] = React.useState('')
  const [infoDisplayed, setInfoDisplayed] = React.useState(false)

  

  function verifyEmail() {
    if (email && emailValidate) {
      if (oldEmail === [email, emailValidate]) return
      
      if (email !== emailValidate) {
        setOldEmail([email, emailValidate])
        setInfoDisplayed(true)

        return setInfo('os emails não são iguais')
      } 
    }
    setInfo('')
    setInfoDisplayed(false)

  }
  
  return <IdentifyContaier infoDisplayed={infoDisplayed}>

   <main>
      <h1>Identificação</h1>
      <h2>As informações serão usadas para o envio dos materiais solicitados.</h2>
      
      <form >
        <span id="info">{info && info}</span>
        <label htmlFor="name">Nome
          <input type="text" placeholder="Ex: João Silva dos Santos"/>
        </label>

        <label htmlFor="name">Email
          <input type="email" placeholder="Ex: email@gmail.com" value={email} onBlur={() => verifyEmail()} onChange={({target}) => setEmail(target.value)}/>
        </label>

        <label htmlFor="name">Digite novamente o email
          <input type="email" placeholder="Ex: email@gmail.com" value={emailValidate} onBlur={() => verifyEmail()} onChange={({target}) => setEmailValidate(target.value)}/>
        </label>

        <label htmlFor="name">Telefone
          <InputMask mask="(99) 9 9999 9999" type="tel" placeholder="Ex: (99) 9 9999 9999" value={phone} onChange={({target}) => setPhone(target.value)}/>
        </label>
        
        <label htmlFor="name">CPF
          <InputMask mask="999.999.999-99" type="text" placeholder="Ex: 999.999.999-99" value={CPF} onChange={({target}) => setCPF(target.value)}/>
        </label>

        <Button type="submit" label="Ir ao pagamento" to="/pagamento"/>

      </form>
   </main>

   <Box title="Aproveite e leve também">
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
  </IdentifyContaier>;
}

export default Identify;