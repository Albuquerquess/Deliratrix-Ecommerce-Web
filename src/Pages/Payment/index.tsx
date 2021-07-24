import React from 'react';
// @types
import { RouteProps } from 'react-router-dom';
import { PaymentProps } from '../../@types/Payment';
import Copy from '../../Assets/Pages/Payment/Copy';
// Assets
import PixIcon from '../../Assets/Pages/Payment/pix.svg';
// components
import Sumary from '../../Components/Summary';
import { PaymentContainer } from './styles';

const Payment: React.FC<RouteProps> = (history) => {
  const states = history.location?.state as PaymentProps
  const qrcode = states.qrcode
  const txid = states.txid
  const chargeRaw = states.chargeRaw

  return <PaymentContainer>
    <h1>Pagamento</h1>
    <h2>Digitalize o código pix QR abaixo com o seu celular.</h2>

    <main>
        <div id="payment-container">
            <section>
                <img src={qrcode} id="pix-qrcode" alt="Ocorreu um erro ao gerar o QRCode PIX" />
                <img src={PixIcon} alt="Pague com PIX" />
            </section>
            <section id="charge-raw">
                <h1>Teve problemas com o código QRCode? Utilize a chave abaixo!</h1>
                <div>
                  <p id="pix-raw">{chargeRaw}</p>
                  <div id="copy">
                    <span>Clique para copiar</span>
                    <Copy clickFunction={() =>navigator.clipboard.writeText(chargeRaw)} />
                  </div>
                  
                </div>
            </section>
            <section id="txid" style={{marginTop: '2rem'}}>
                <h1 style={{fontSize: '1.2rem'}}>Guarde o seu código identificador de compra (ele será útil em caso de erros)</h1>
                <div>
                  <p id="pix-raw">{txid}</p>
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