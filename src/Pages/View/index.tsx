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
    console.log(responseUniqueContent.data.content.time)
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


  return <ViewContainer image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}>
  <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>

  <nav>
    <span>{ 'Tipo' }  {'>'}  { 'Categoria' }  {'>'}  { 'Título' } </span>
  </nav>
  <main id="view-main">
    <>
      <section>
      <div id="image"></div>
      <div id="options">
        <nav>
          <h1>{'Título'}</h1>
          <span>Categoria: {'Categoria'}</span>
        </nav>
        <div id="select-options">
          <ol>
            <h2>Selecione uma opção:</h2>

              <li key={1}>
              <label htmlFor={String(2)} onClick={() => {
                setCurrentPrice({
                  price: 100,
                  label: 'Rótulo',
                  id: 2})
                setItemClickOnInput(2)}
                }>

                <div className={`radio ${itemClickOnInput === 2 && 'input-radio-clicked'}`} >1</div>
                <input type="radio" name="price" id={'2'} value={100} />{'Rótulo'}</label>
            </li>

          </ol>
            <footer>
              <span id="current-price">{currentPrice?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })|| 'Por favor, selecione uma opção'}</span>
              <Button label="Adicionar ao carrinho" to="/carrinho" handleClicked={() => Context.handleAddItemToCart(2, Number(currentPrice?.id))} disabled={!currentPrice && true}/>
              <img src={pix} alt="Pagamento via PIX" />
            </footer>
        </div>
      </div>
    </section>
    <section>
       <h2>Descrição</h2>
       <p id="desc">{'Deserunt do velit adipisicing pariatur sit ex sint ex irure. Aliquip excepteur elit enim veniam commodo aute. Voluptate consequat sit voluptate eu Lorem voluptate sint amet est commodo quis. Ad deserunt dolor nostrud labore et proident.'}</p>
       
       <span id="duration">
          Duração do conteúdo: <strong>{'5 minutos'} minutos.</strong>
        </span>
       
    </section></> 
  </main>

  <Box title="Produtos relacionados">
  {/* {contentDataByCategory && contentDataByCategory.map((content) => {

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
  )} */}
  <Card 
         title={'Título'}
         description={'Id occaecat sit exercitation ea pariatur. Occaecat et nostrud duis cupidatat. Commodo duis deserunt deserunt cupidatat qui deserunt ad voluptate consectetur sint commodo laboris ad. Enim nisi commodo do ullamco. Est ut sint enim commodo pariatur fugiat duis in. Veniam Lorem sit veniam minim nostrud tempor ex tempor nisi nisi ad ipsum do.'}
         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
         value={100}
         rate={4}
         type="sexo"
         category="Categoria"
         id={123}
      />
      <Card 
         title={'Título'}
         description={'Id occaecat sit exercitation ea pariatur. Occaecat et nostrud duis cupidatat. Commodo duis deserunt deserunt cupidatat qui deserunt ad voluptate consectetur sint commodo laboris ad. Enim nisi commodo do ullamco. Est ut sint enim commodo pariatur fugiat duis in. Veniam Lorem sit veniam minim nostrud tempor ex tempor nisi nisi ad ipsum do.'}
         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
         value={100}
         rate={4}
         type="sexo"
         category="Categoria"
         id={123}
      />
      <Card 
         title={'Título'}
         description={'Id occaecat sit exercitation ea pariatur. Occaecat et nostrud duis cupidatat. Commodo duis deserunt deserunt cupidatat qui deserunt ad voluptate consectetur sint commodo laboris ad. Enim nisi commodo do ullamco. Est ut sint enim commodo pariatur fugiat duis in. Veniam Lorem sit veniam minim nostrud tempor ex tempor nisi nisi ad ipsum do.'}
         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
         value={100}
         rate={4}
         type="sexo"
         category="Categoria"
         id={123}
      />
      <Card 
         title={'Título'}
         description={'Id occaecat sit exercitation ea pariatur. Occaecat et nostrud duis cupidatat. Commodo duis deserunt deserunt cupidatat qui deserunt ad voluptate consectetur sint commodo laboris ad. Enim nisi commodo do ullamco. Est ut sint enim commodo pariatur fugiat duis in. Veniam Lorem sit veniam minim nostrud tempor ex tempor nisi nisi ad ipsum do.'}
         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
         value={100}
         rate={4}
         type="sexo"
         category="Categoria"
         id={123}
      />
      <Card 
         title={'Título'}
         description={'Id occaecat sit exercitation ea pariatur. Occaecat et nostrud duis cupidatat. Commodo duis deserunt deserunt cupidatat qui deserunt ad voluptate consectetur sint commodo laboris ad. Enim nisi commodo do ullamco. Est ut sint enim commodo pariatur fugiat duis in. Veniam Lorem sit veniam minim nostrud tempor ex tempor nisi nisi ad ipsum do.'}
         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1200px-BBFC_18_2019.svg.png'}
         value={100}
         rate={4}
         type="sexo"
         category="Categoria"
         id={123}
      />
  </Box>
</ViewContainer>;
}

export default View;