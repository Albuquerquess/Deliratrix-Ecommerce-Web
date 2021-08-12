import React from 'react';
import { useHistory } from 'react-router';
import { string } from 'yup/lib/locale';
// @types
import { cartDataProps, contentProps } from '../../@types/Cart';
import Box from '../../Components/Box';
// components
import Card from '../../Components/Card';
import Sumary from '../../Components/Summary';
// consts
import { INDEX } from '../../Consts/urls';
// Context
import { CartContext } from '../../Context/Cart';
// Api
import Api from '../../Services/Api';
// styles
import { CardContainer } from './styles';

const Cart: React.FC = () => {

  const [contentData, setContentData] = React.useState<contentProps[]>([])
  const [cartContent, setCartContent] = React.useState<cartDataProps>({
    prices: [], contents: [],
  })

  const cartContext = React.useContext(CartContext)
  const history = useHistory()

  async function getCartData() {
    const report = await cartContext.getCartReport()
    setCartContent(report[0])
    }
    
  async function getContentOnBackend() {
    const responseContentByCategory = await Api.get(INDEX, {params: {type: 'product'}})
    
    setContentData(responseContentByCategory.data)
  }
    
  React.useEffect(() => {
    getCartData()
    getContentOnBackend()
  }, [])

  return <>
    <CardContainer>
      <section id="cart" >
        <h1>Meu carrinho</h1>
        <main>
        {cartContent.contents ? cartContent.contents.map(content => {
          const [value] = cartContent.prices.filter(price => (Number(price.content_id) ===  content.id))
          console.log(value)
          
          return (<Card
            removeDisplayed
            onCartPage
            handleRemove={() => {
              cartContext.handleRemoveItemToCart(content.id)
              history.go(0)
            }}
            title={content.title}
            description={content.desc}
            image={content.url}
            value={Number(value.price)}
            rate={content.rate}
            type={content.type}
            category={content.category}
            id={content.id}
            />)}): (<strong>Você deve adicionar um produto no carrinho para visualizar as estatisticas.</strong>)}
        </main>
      </section>
     <Sumary buttonsDisplayed />

    </CardContainer>
  </>
}

export default Cart;