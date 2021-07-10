import React from 'react';

// styles
import { ViewContainer } from './styles';

// components
import SearchInput from '../../Components/SearchInput'
import Button from '../../Components/Button'
import Box from '../../Components/Box'
import Card from '../../Components/Card'

// assets
import pix from '../../Assets/Pages/View/pix.svg'

const View: React.FC = () => {

  const [search, setSearch] = React.useState('')
  const [inputClick, setInputClick] = React.useState('price_1')


  return <ViewContainer image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80">
    <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>

    <nav>
      <span>Produtos {'>'} Sexo {'>'} Boquete </span>
    </nav>
    <main id="view-main">
      <section>
        <div id="image"></div>
        <div id="options">
          <nav>
            <h1>Sexo</h1>
            <span>Categoria: Sexo</span>
          </nav>
          <div id="select-options">
            <ol>
              <h2>Selecione uma opção:</h2>
              <li>
                <label htmlFor="price_1" onClick={() => setInputClick('price_1')}>
                  <div className={`radio ${inputClick == 'price_1' && 'input-radio-clicked'}`} >1</div>
                  <input type="radio" name="price" id="price_1" value="price1" />Tipo 01</label>
              </li>
              <li>
                <label htmlFor="price_2" onClick={() => setInputClick('price_2')}>
                  <div className={`radio ${inputClick == 'price_2' && 'input-radio-clicked'}`}>2</div>
                  <input type="radio" name="price" id="price_2" value="price2" />Tipo 01</label>
              </li>
              <li>
                <label htmlFor="price_3" onClick={() => setInputClick('price_3')}>
                  <div className={`radio ${inputClick == 'price_3' && 'input-radio-clicked'}`}>3</div>
                  <input type="radio" name="price" id="price_3" value="price3" />Tipo 01</label>
              </li>
            </ol>
              <footer>
                <span id="current-price">R$ 80,00</span>
                <Button label="Adicionar ao carrinho"/>
                <img src={pix} alt="Pagamento via PIX" />
              </footer>
          </div>
        </div>
      </section>
      <section>
         <h2>Descrição</h2>
         <p>Dolor officia id non exercitation est eu aliquip. Do eiusmod veniam officia enim dolor labore aute ex. Dolore anim eiusmod veniam do. Occaecat velit laborum velit sint anim consequat officia. Fugiat magna occaecat ea qui ullamco aute adipisicing magna minim aute tempor reprehenderit anim excepteur. .Quis in aute exercitation reprehenderit minim. Culpa culpa incididunt mollit cillum tempor minim. Cillum minim id consectetur velit quis ipsum. Tempor excepteur Lorem culpa aliquip reprehenderit. Elit in nostrud eu do voluptate officia velit pariatur ipsum do ipsum incididunt. Dolore cupidatat aliquip laboris id sit pariatur aliquip non nisi elit voluptate voluptate officia.</p>
      </section>
    </main>

    <Box title="Produtos relacionados">
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={ [
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
          {
            id: 1,
            price: 80,
            label: 'Label do preço'
          },
        ]} />
    </Box>
  </ViewContainer>;
}

export default View;