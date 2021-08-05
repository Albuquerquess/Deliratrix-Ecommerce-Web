import React from 'react';
// @types
import { RouteProps, Link } from 'react-router-dom';
import { contentProps, txidProps, PaymentConfirmedProps } from '../../@types/Confirmation';
// assets
import Thanks from '../../Assets/Pages/Confirmation/thanks.svg';
// components
import Box from '../../Components/Box';
import Card from '../../Components/Card';
import Loading from '../../Components/Loading';

// consts
import { INDEX, PAYMENT_CONFIRMED } from '../../Consts/urls';
// Api
import Api from '../../Services/Api';
// styles
import { ConfirmationContainer } from './styles';

const Confirmation: React.FC<RouteProps> = (history) => {
   const [contentData, setContentData] = React.useState<contentProps[]>([])
   const [confirmedPayment, setConfirmedPayment] = React.useState(false)
   const [paymentStatusCode, setPaymentStatusCode] = React.useState(0)
   const states = history.location?.state as txidProps
   const txid = states?.txid

   async function checkPaymentConfirmation(txid: (string | undefined)) {
     if(txid) {
      const response = await Api.get(PAYMENT_CONFIRMED, {params: {txid}})
      const isPaid: PaymentConfirmedProps = response.data

      if (isPaid.error) {
         setConfirmedPayment(false)
         setPaymentStatusCode(500)
      }

      if (isPaid.paid === true && response.status === 200 ){
         setConfirmedPayment(true)
         setPaymentStatusCode(200)
      }
      if (isPaid.paid === false && response.status === 404) {
         setConfirmedPayment(false)
         setPaymentStatusCode(404)
      }
     }
   }

   async function getContentOnBackend() {
      const responseContentByCategory = await Api.get(INDEX, {params: {type: 'service'}})
      setContentData(responseContentByCategory.data)
    }

   React.useEffect(() => {
      getContentOnBackend()
      checkPaymentConfirmation(txid)
    }, [])
  
  return <>
     <ConfirmationContainer>
  {
     paymentStatusCode === 200 && confirmedPayment === true ? 
         <main>
            <h1>Muito obrigada por chegar até aqui!</h1>
            <h2>Logo seu pedido será enviado por email.</h2>
            <img src={Thanks} alt="muito obrigado" />
            <span>Agora você poderá despertar a chama dos seus fetiches mais intensos.</span>
         </main> : <h1>Não foi possível encontrar o código de verificação de pagamento. <Link to="/">Clique aqui para voltar para a Home</Link> </h1>
  }
      </ConfirmationContainer>
 
  </>
}

export default Confirmation;