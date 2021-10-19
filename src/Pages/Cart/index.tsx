import React from 'react';
import { useHistory } from 'react-router';
// components
import Card from '../../Components/Card';
import RelatedContent from '../../Components/RelatedContent';
import Summary from '../../Components/Summary';
// Context
import { CartContext } from '../../Context/Cart';
// @types
import { cartDataProps } from '../../types/Cart';
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
          
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => {
              cartContext.handleRemoveItemToCart(2)
              history.go(0)
            }}
            title={'Título'}
            description={'Exercitation veniam cupidatat Lorem voluptate laborum eiusmod velit aliquip officia ea cillum consectetur velit. Sint duis tempor duis quis quis duis cupidatat. Id consectetur nostrud ut eu ad culpa fugiat irure cillum incididunt enim ipsum velit consequat. Amet esse eu excepteur excepteur nisi proident cupidatat nostrud nulla velit labore sint. Do eu sint aute aliqua adipisicing aute elit cillum exercitation nisi aliqua. Labore aliquip sunt cillum sint reprehenderit est cupidatat dolore consequat minim ut sunt.'}
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
            value={Number(100)}
            rate={4}
            type={'Tipo'}
            category={'Categoria'}
            id={2}
            />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => {
              cartContext.handleRemoveItemToCart(2)
              history.go(0)
            }}
            title={'Título'}
            description={'Exercitation veniam cupidatat Lorem voluptate laborum eiusmod velit aliquip officia ea cillum consectetur velit. Sint duis tempor duis quis quis duis cupidatat. Id consectetur nostrud ut eu ad culpa fugiat irure cillum incididunt enim ipsum velit consequat. Amet esse eu excepteur excepteur nisi proident cupidatat nostrud nulla velit labore sint. Do eu sint aute aliqua adipisicing aute elit cillum exercitation nisi aliqua. Labore aliquip sunt cillum sint reprehenderit est cupidatat dolore consequat minim ut sunt.'}
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
            value={Number(100)}
            rate={4}
            type={'Tipo'}
            category={'Categoria'}
            id={2}
            />
          <Card
            removeDisplayed
            onCartPage
            handleRemove={() => {
              cartContext.handleRemoveItemToCart(2)
              history.go(0)
            }}
            title={'Título'}
            description={'Exercitation veniam cupidatat Lorem voluptate laborum eiusmod velit aliquip officia ea cillum consectetur velit. Sint duis tempor duis quis quis duis cupidatat. Id consectetur nostrud ut eu ad culpa fugiat irure cillum incididunt enim ipsum velit consequat. Amet esse eu excepteur excepteur nisi proident cupidatat nostrud nulla velit labore sint. Do eu sint aute aliqua adipisicing aute elit cillum exercitation nisi aliqua. Labore aliquip sunt cillum sint reprehenderit est cupidatat dolore consequat minim ut sunt.'}
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
            value={Number(100)}
            rate={4}
            type={'Tipo'}
            category={'Categoria'}
            id={2}
            />
        </main>
      </section>
     <Summary buttonsDisplayed />
    </CardContainer>
    <RelatedContent type="product" title={cartContent.contents && cartContent.contents.length ? "Conteúdos relacionados" : "Veja estes conteúdos"}/>
  </>
}

export default Cart;