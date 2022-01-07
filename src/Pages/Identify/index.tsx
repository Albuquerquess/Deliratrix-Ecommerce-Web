import React from 'react';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
// components
import Button from '../../Components/Button';
import RelatedContent from '../../Components/RelatedContent';
// consts
import { PAYMENT_GENERATE } from '../../Consts/urls';
// context
import { CartContext } from '../../Context/Cart';
import { DebtorContext } from '../../Context/Debtor';
// Api
import Api from '../../Services/Api';
// @types
import { DebtorProps } from '../../types/Identify';
// validator
import identifyValidate from '../../Validation/identify';
// styles
import { IdentifyContaier } from './styles';

const Identify: React.FC = () => {  
  const cartContext = React.useContext(CartContext)
  const debtorContext = React.useContext(DebtorContext)
  
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  
  const [emailValidate, setEmailValidate] = React.useState('')
  const [oldEmail, setOldEmail] = React.useState([''])
  const [validEmail, setValidEmail] = React.useState(false)
  
  const [info, setInfo] = React.useState('')
  const [infoDisplayed, setInfoDisplayed] = React.useState(false)
  const [allOk, setAllOk] = React.useState(false)


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

  React.useEffect(() => {
    const getDebtorInfoOnCokies: DebtorProps = debtorContext.getDebtorData()
    if(getDebtorInfoOnCokies) {
      setName(getDebtorInfoOnCokies.name ? getDebtorInfoOnCokies.name : '')
      setEmail(getDebtorInfoOnCokies.email ? getDebtorInfoOnCokies.email : '')
      setPhone(getDebtorInfoOnCokies.phone ? getDebtorInfoOnCokies.phone : '')
    }

// getDebtorInfoOnCokies.name ? getDebtorInfoOnCokies.name : ''
  }, [])

  async function saveDebtorDataOnCookies(name: string, email: string, phone: string) {
    debtorContext.handleAddDebtor(name, email, phone)
  }

  async function generatePayment() {
    const debtorReport: DebtorProps = debtorContext.getDebtorData()
    const [cartReport] = await cartContext.getCartReport()

    if (cartReport) {
      const data = {
        cart: {
          contents: cartReport.contents,
          prices: cartReport.prices
        }, 
        debtor: {name, email, phone}
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

  return <><IdentifyContaier infoDisplayed={infoDisplayed}>
   <main>
      <h1>Identificação</h1>
      <h2 id="subtitle">As informações serão usadas para o envio dos materiais solicitados.</h2>
      
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
             //maskChar={null}
            type="tel"
            placeholder="Ex: (99) 9 9999 9999"
            value={phone}
            onChange={({target}) => setPhone(target.value)}/>


        </label>

        <Button type="submit" label="Ir ao pagamento" /*disabled={allOk ? false : true}*/ disabled={false} handleClicked={() => {
          alert('Nessa parte, o usuário iria ser redirecionado ao pagamento. Lá, o QRCode seria lido e, após a validação do pagamento, o conteúdo seria enviado para o email do mesmo. Confira neste link: https://prnt.sc/1wqjna6 e https://prnt.sc/1wqjqqd')
          // saveDebtorDataOnCookies(name, email, phone)
          // generatePayment()
          }}/>

      </form>
   </main>

  </IdentifyContaier>
  <RelatedContent type="product"/>

  </>
}

export default Identify;