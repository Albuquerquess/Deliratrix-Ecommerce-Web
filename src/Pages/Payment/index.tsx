import React from 'react';

import { PaymentContainer } from './styles';

// Assets
import PixIcon from '../../Assets/Pages/Payment/pix.svg'
import Copy from '../../Assets/Pages/Payment/Copy'

// components
import Sumary from '../../Components/Sumary'

const Payment: React.FC = () => {
  return <PaymentContainer>
    <h1>Pagamento</h1>
    <h2>Digitalize o código pix QR abaixo com o seu celular.</h2>

    <main>
        <div id="payment-container">
            <section>
                <img src="https://www.jornalestadodegoias.com.br/wp-content/uploads/2020/03/qr-code.png" id="pix-qrcode" alt="Ocorreu um erro ao gerar o QRCode PIX" />
                <img src={PixIcon} alt="Pague com PIX" />
            </section>
            <section>
                <h1>Teve problemas com o código QRCode? Utilize a chave abaixo!</h1>
                <div>
                  <p id="pix-raw">00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426655440000 5204000053039865802BR5913Fulano de Tal6008BRASILIA62070503***63041D3D</p>
                  <div id="copy">
                    <span>Clique para copiar</span>
                    <Copy clickFunction={() =>navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426655440000 5204000053039865802BR5913Fulano de Tal6008BRASILIA62070503***63041D3D')} />
                  </div>
                </div>
            </section>
        </div>
    </main>
    <div id="purchase-summary">
      <Sumary
          items={3}
          subvalue={160.00}
          discount={30}
          finalvalue={112.00} 
          />
    </div>
  </PaymentContainer>;
}

export default Payment;