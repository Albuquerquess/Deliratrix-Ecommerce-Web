import React from 'react';
import { useHistory } from 'react-router';
import { string } from 'yup/lib/locale';
// @types
import { cartDataProps, contentProps } from '../../types/Cart';
import Box from '../../Components/Box';
// components
import Card from '../../Components/Card';
import Summary from '../../Components/Summary';
import RelatedContent from '../../Components/RelatedContent';
// consts
import { INDEX } from '../../Consts/urls';
// Context
import { CartContext } from '../../Context/Cart';
// styles
import { CardContainer } from './styles';

const Cart: React.FC = () => {

  const [cartContent, setCartContent] = React.useState<cartDataProps>({
    prices: [], contents: [],
  })

  const cartContext = React.useContext(CartContext)
  const history = useHistory()

  async function getCartData() {
    const report = await cartContext.getCartReport()
    setCartContent(report[0])
    }
    
  React.useEffect(() => {
    getCartData()
  }, [])

  return <>
    <CardContainer>
      <section id="cart" >
        <h1>Meu carrinho</h1>
        <main>
        {cartContent.contents && cartContent.contents.length ? cartContent.contents.map(content => {

          const [value] = cartContent.prices.filter(price => (Number(price.content_id) ===  content.id))
          
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
            />)}): (<strong>Você deve adicionar um conteúdo no carrinho para visualizá-los.</strong>)}
        </main>
      </section>
     {cartContent.contents.length && <Summary buttonsDisplayed />}
    </CardContainer>
    <RelatedContent type="product"/>
  </>
}

export default Cart;