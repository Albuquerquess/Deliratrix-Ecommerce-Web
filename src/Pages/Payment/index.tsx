import React from 'react';
import { RouteProps, useHistory } from 'react-router-dom';
// types
import { PaymentConfirmedProps, PaymentProps } from '../../@types/Payment';
//assets
import Copy from '../../Assets/Pages/Payment/Copy';
// Assets
import PixIcon from '../../Assets/Pages/Payment/pix.svg';
// components
import Sumary from '../../Components/Summary';
//Consts
import { PAYMENT_CONFIRMED } from '../../Consts/urls';
// Api
import Api from '../../Services/Api';
import { PaymentContainer } from './styles';


const Payment: React.FC<RouteProps> = (history) => {
  const states = history.location?.state as PaymentProps
  const qrcode = states.qrcode
  const txid = states.txid
  const chargeRaw = states.chargeRaw
  const redirect = useHistory()

  async function verifyIsPaid() {
    setTimeout(async () => {
      const response = await Api.get(PAYMENT_CONFIRMED, {params: {txid: txid}})

    const isPaid: PaymentConfirmedProps = response.data

    if(isPaid.error) {
      alert('Erro ao tentar validar o pagamento. Envie o comprovante para @Deliratrix nas redes sociais')
    } 

    if(isPaid.paid === true) {
      redirect.push({
        pathname: '/pagamento/confirmacao',
        state: {txid}
      })
    }else {
      verifyIsPaid()
    }
    }, 5000)
  }
  
  React.useEffect(() => {
    verifyIsPaid()
  }, [])

  return <PaymentContainer>
    <h1>Pagamento</h1>
    <h2>Digitalize o código pix QR abaixo com o seu celular.</h2>

    <main>
        <div id="payment-container">
          <div id="qrcode-container">
                <img src={qrcode} id="pix-qrcode" alt="Ocorreu um erro ao gerar o QRCode PIX" />
                <img src={PixIcon} alt="Pague com PIX" />
            </div>
            <section>
                <h1>Teve problemas com o código QRCode? Utilize a chave abaixo!</h1>
                <div>
                  <p>{chargeRaw}</p>
                  <div id="copy">
                    <span>Clique para copiar</span>
                    <Copy clickFunction={() =>navigator.clipboard.writeText(chargeRaw)} />
                  </div>
                  
                </div>
            </section>
            <section>
                <h1 style={{fontSize: '1.2rem'}}>Guarde o seu código identificador de compra (ele será útil em caso de erros)</h1>
                <div>
                  <p>{txid}</p>
                  <div id="copy">
                    <span>Clique para copiar</span>
                    <Copy clickFunction={() =>navigator.clipboard.writeText(txid)} />
                  </div>
                  
                </div>
            </section>
        </div>
    </main>
    <div id="purchase-summary">
      <Sumary />
    </div>
  </PaymentContainer>;
}

export default Payment;