import React from 'react';
import { useParams } from 'react-router-dom'

// styles
import { ViewContainer } from './styles';

// components
import SearchInput from '../../Components/SearchInput'
import Button from '../../Components/Button'
import Box from '../../Components/Box'
import Card from '../../Components/Card'

// assets
import pix from '../../Assets/Pages/View/pix.svg'

// Context
import { CartContext } from '../../Context/Cart'

// @types
import { viewParamsProps, responseUniqueContentProps, priceProps, contentProps } from '../../@types/View'

// consts
import { INDEX_SHOW, INDEX_CATEGORY } from '../../Consts/urls'

// services
import Api from '../../Services/Api'
import react from 'react';

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
    if (category === undefined) return // falar q n foi possivel acessar os dados no servidor
    const responseContentByCategory = await Api.get(INDEX_CATEGORY, {params: {category: category, type: type}})
    
    setContentDataByCategory(responseContentByCategory.data)
  }

  React.useEffect(() => {
    getUniqueContentOnBackend(String(id))
  }, [])

  React.useEffect(() => {
    const category = contentData?.content.category 
    const type = contentData?.content.type 
    getRelatedContentOnBackend(category, type)
  }, [contentData])

 
  return <>{contentData && contentData.content ? <ViewContainer image={contentData?.content.url}>
  <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>

  <nav>
    <span>Produtos {'>'} Sexo {'>'} Boquete </span>
  </nav>
  {<main id="view-main">
    <section>
      <div id="image"></div>
      <div id="options">
        <nav>
          <h1>Sexo</h1>
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
       <p>Dolor officia id non exercitation est eu aliquip. Do eiusmod veniam officia enim dolor labore aute ex. Dolore anim eiusmod veniam do. Occaecat velit laborum velit sint anim consequat officia. Fugiat magna occaecat ea qui ullamco aute adipisicing magna minim aute tempor reprehenderit anim excepteur. .Quis in aute exercitation reprehenderit minim. Culpa culpa incididunt mollit cillum tempor minim. Cillum minim id consectetur velit quis ipsum. Tempor excepteur Lorem culpa aliquip reprehenderit. Elit in nostrud eu do voluptate officia velit pariatur ipsum do ipsum incididunt. Dolore cupidatat aliquip laboris id sit pariatur aliquip non nisi elit voluptate voluptate officia.</p>
    </section>
  </main>}

  <Box title="Produtos relacionados">
  {contentDataByCategory && contentDataByCategory.map((content) => {

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
  )}
  </Box>
</ViewContainer> : <h1>Não foi possivel carregar a página :/</h1>}</>;
}

export default View;