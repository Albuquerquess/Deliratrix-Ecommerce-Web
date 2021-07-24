import React from 'react';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
// @types
import { DebtorProps } from '../../@types/Identify';
import Box from '../../Components/Box';
// components
import Button from '../../Components/Button';
import Card from '../../Components/Card';
// consts
import { PAYMENT_GENERATE } from '../../Consts/urls';
// context
import { CartContext } from '../../Context/Cart';
import { DebtorContext } from '../../Context/Debtor';
// Api
import Api from '../../Services/Api';
// styles
import { IdentifyContaier } from './styles';
// validator
import identifyValidate from '../../Validation/identify';

const Identify: React.FC = () => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  
  const [emailValidate, setEmailValidate] = React.useState('')
  const [oldEmail, setOldEmail] = React.useState([''])
  const [validEmail, setValidEmail] = React.useState(false)
  
  const [info, setInfo] = React.useState('')
  const [infoDisplayed, setInfoDisplayed] = React.useState(false)
  const [allOk, setAllOk] = React.useState(false)
  
  const cartContext = React.useContext(CartContext)
  const debtorContext = React.useContext(DebtorContext)

  const history = useHistory()

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
    setValidEmail(true)
  }

  React.useEffect(() => {
    if (name && email && phone && validEmail && name !== '' && email !== '' && phone.length >= 16) {
      return setAllOk(true)
    }else {
      setAllOk(false)
    }
  }, [name, email, phone, validEmail])

  async function saveDebtorDataOnCookies(name: string, email: string, phone: string) {
    await debtorContext.handleAddDebtor(name, email, phone)
  }

  async function generatePayment() {
    const debtorReport: DebtorProps = await debtorContext.getDebtorData()
    const [cartReport] = await cartContext.getCartReport()

    console.log(debtorReport)
    console.log(cartReport)

    if (debtorReport && cartReport) {
      const data = {
        cart: {
          contents: cartReport.contents,
          prices: cartReport.prices
        }, 
        debtor: debtorReport
      }

      const response = await Api.post(PAYMENT_GENERATE, data)

      const payload = {name, email, phone}
      const validate = await identifyValidate(payload)
      if (!(validate?.valid)) return alert('Erro: '+validate?.error)    

      return history.push({
        pathname: '/pagamento',
        state: {
          txid: response.data.txid,
          qrcode: response.data.qrcode,
          chargeRaw: response.data.chargeRaw
        }
      })

   }else {
      alert('Não foi possivel gerar o pagamento. por favor, tente novamente')
    }
  }

  return <IdentifyContaier infoDisplayed={infoDisplayed}>
   <main>
      <h1>Identificação</h1>
      <h2>As informações serão usadas para o envio dos materiais solicitados.</h2>
      
      <form onSubmit={(e) => {
          e.preventDefault()
          saveDebtorDataOnCookies(name, email, phone)
          generatePayment()}
        }>
        <span id="info">{info && info}</span>
        <label htmlFor="name">Nome
          <input
            type="text"
            placeholder="Ex: João Silva dos Santos"
            value={name}
            onChange={({target}) => setName(target.value)}/>
            
        </label>

        <label htmlFor="name">Email
          <input
            type="email"
            placeholder="Ex: email@gmail.com"
            value={email}
            onBlur={() => {verifyEmail()}}
            onChange={({target}) => setEmail(target.value)}/>
            
        </label>

        <label htmlFor="name">Digite novamente o email
          <input
            type="email"
            placeholder="Ex: email@gmail.com"
            value={emailValidate}
            onBlur={() => {verifyEmail()}}
            onChange={({target}) => setEmailValidate(target.value)}/>
            
        </label>

        <label htmlFor="name">Telefone
          <InputMask
            mask="(99) 9 9999 9999"
            alwaysShowMask={false}
             maskChar={null}
            type="tel"
            placeholder="Ex: (99) 9 9999 9999"
            value={phone}
            onChange={({target}) => setPhone(target.value)}/>
        </label>

        <Button type="submit" label="Ir ao pagamento" disabled={allOk ? false : true} handleClicked={() => {
          saveDebtorDataOnCookies(name, email, phone)
          generatePayment()
          }}/>

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
  </IdentifyContaier>;
}

export default Identify;