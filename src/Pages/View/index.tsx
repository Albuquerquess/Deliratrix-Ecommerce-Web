import { default as React, default as react } from 'react';
import { useParams } from 'react-router-dom';
// @types
import { contentProps, priceProps, responseUniqueContentProps, viewParamsProps } from '../../types/View';
// assets
import pix from '../../Assets/Pages/View/pix.svg';
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import Loading from '../../Components/Loading';
// components
import SearchInput from '../../Components/SearchInput';
// consts
import { INDEX_CATEGORY, INDEX_SHOW } from '../../Consts/urls';
// Context
import { CartContext } from '../../Context/Cart';
// services
import Api from '../../Services/Api';
// styles
import { ViewContainer } from './styles';

const View: React.FC = () => {
  const [search, setSearch] = React.useState('')
  const [itemClickOnInput, setItemClickOnInput] = React.useState<number | null>(null)

  const [contentData, setContentData] = React.useState<responseUniqueContentProps>()
  const [currentPrice, setCurrentPrice] = react.useState<priceProps>()

  const [contentDataByCategory, setContentDataByCategory] = React.useState<contentProps[]>([])

  const params: viewParamsProps = useParams()
  const id = params.id
  
  const Context = React.useContext(CartContext)

  async function getUniqueContentOnBackend(id: string) {

    const responseUniqueContent = await Api.get(INDEX_SHOW, {params: {id: id}})
    setContentData(responseUniqueContent.data)
  }
  async function getRelatedContentOnBackend(category: string | undefined, type: string | undefined) {
    const responseContentByCategory = await Api.get(INDEX_CATEGORY, {params: {category: category, type: type}})
    setContentDataByCategory(responseContentByCategory.data)
  }

  React.useEffect(() => {
    getUniqueContentOnBackend(String(id))
  }, [id])

  React.useEffect(() => {
    const category = contentData?.content.category 
    const type = contentData?.content.type 
    getRelatedContentOnBackend(category, type)
  }, [contentData])


  return <>{contentData && contentData.content ? <ViewContainer image={contentData.content.url}>
  <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>

  <nav>
    <span>{contentData.content.type }  {'>'}  {contentData.content.category }  {'>'}  {contentData.content.title} </span>
  </nav>
  <main id="view-main">
    {contentData.content.id ? <>
      <section>
      <div id="image"></div>
      <div id="options">
        <nav>
          <h1>{contentData.content.title}</h1>
          <span>Categoria: {contentData.content.category}</span>
        </nav>
        <div id="select-options">
          <ol>
            <h2>Selecione uma opção:</h2>
            {contentData.prices.map((price, index) => {
              return <li key={index}>
              <label htmlFor={String(price.id)} onClick={() => {
                setCurrentPrice(price)
                setItemClickOnInput(price.id)}
                }>

                <div className={`radio ${itemClickOnInput === price.id && 'input-radio-clicked'}`} >1</div>
                <input type="radio" name="price" id={price.label} value={price.price} />{price.label}</label>
            </li>
            })}
          </ol>
            <footer>
              <span id="current-price">{currentPrice?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })|| 'Por favor, selecione uma opção'}</span>
              <Button label="Adicionar ao carrinho" to="/carrinho/49" handleClicked={() => Context.handleAddItemToCart(contentData.content.id, Number(currentPrice?.id))} disabled={!currentPrice && true}/>
              <img src={pix} alt="Pagamento via PIX" />
            </footer>
        </div>
      </div>
    </section>
    <section>
       <h2>Descrição</h2>
       <p id="desc">{contentData.content.desc}</p>
    </section></> : <Loading />}
  </main>

  <Box title="Produtos relacionados">
  {contentDataByCategory && contentDataByCategory.map((content) => {

    if (content.id !== Number(id)) {
      return <Card
        title={content.title}
        description={content.desc}
        image={content.url}
        value={content.price}
        rate={content.rate}
        type={content.type}
        category={content.category}
        id={content.id} />
    }
  }
  )}
  </Box>
</ViewContainer> : <h1>Não foi possivel carregar a página :/</h1>}</>;
}

export default View;