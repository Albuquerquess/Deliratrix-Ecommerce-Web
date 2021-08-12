import React from 'react';
// @types
import { RouteProps } from 'react-router-dom';
import { contentProps, PaymentConfirmedProps, txidProps } from '../../types/Confirmation';
// assets
import Thanks from '../../Assets/Pages/Confirmation/thanks.svg';
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
      }else if (isPaid.paid === true && response.status === 200 ){
         setConfirmedPayment(true)
         setPaymentStatusCode(200)
      }else if (isPaid.paid === false && response.status === 404) {
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

    setInterval(function() { window.location=window.location;},5000);


  
  return <>
     <ConfirmationContainer>
  {   
     paymentStatusCode === 200 && confirmedPayment === true ? 
         <main>
            <h1>Muito obrigada por chegar até aqui!</h1>
            <h2>Logo seu pedido será enviado por email.</h2>
            <img src={Thanks} alt="muito obrigado" />
               <span>Agora você poderá despertar a chama dos seus fetiches mais intensos.</span>
         </main> : paymentStatusCode === 404 ? 
            <main>
               <h1>Não encontramos o seu código de confirmação de pagamento.</h1>
               <h2>envie o <strong>comprovante de pagamento</strong> para <a href="https://www.instagram.com/deliratrix/">@deliratrix</a></h2>
            </main> : paymentStatusCode !== 200 && paymentStatusCode !== 404 &&
               <main>
                  <h1>Ocorreu um erro interno ao buscar o seu comprovante de pagamento</h1>
                  <h2>Isso não indica que o pagamento não foi realizado, Se a compra ocorreu, envie o <strong>comprovante de pagamento</strong> para <a href="https://www.instagram.com/deliratrix/">@deliratrix</a></h2>
               </main>
  }
      </ConfirmationContainer>
 
  </>
}

export default Confirmation;