import React from 'react';
// @types
import { contentProps } from '../../@types/Confirmation';
// assets
import Thanks from '../../Assets/Pages/Confirmation/thanks.svg';
// components
import Box from '../../Components/Box';
import Card from '../../Components/Card';
// consts
import { INDEX } from '../../Consts/urls';
// Api
import Api from '../../Services/Api';
// styles
import { ConfirmationContainer } from './styles';

const Confirmation: React.FC = () => {
   const [contentData, setContentData] = React.useState<contentProps[]>([])

   async function getContentOnBackend() {

      const responseContentByCategory = await Api.get(INDEX, {params: {type: 'service'}})
      
      setContentData(responseContentByCategory.data)
    }

   React.useEffect(() => {
      getContentOnBackend()
    }, [])
  
  return <>
  <ConfirmationContainer>
     <main>
        <h1>Muito obrigada por chegar até aqui!</h1>
        <h2>Logo seu pedido será enviado por email.</h2>
        <img src={Thanks} alt="muito obrigado" />
        <span>Agora você poderá despertar a chama dos seus fetiches mais intensos.</span>
     </main>
  </ConfirmationContainer>
 
  </>
}

export default Confirmation;