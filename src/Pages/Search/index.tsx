import React from 'react';
import { useParams } from 'react-router-dom'

// styles
import { SearchContainer } from './styles';

// @types
import { searchParamsProps } from '../../@types/searchPage';

// components
import SearchInput from '../../Components/SearchInput'
import Box from '../../Components/Box'
import Card from '../../Components/Card'
import Select from 'react-select';

// Assets
import Sort from '../../Assets/Components/SearchPage/Sort'

const Search: React.FC = () => {
  const params: searchParamsProps = useParams();
  const searchParam = params.search
  
  const selarctSearchFilterOptions = [
    {value: 'rate', label: 'Melhor avaliação'},
    {value: 'highest_price', label: 'Maior preço'},
    {value: 'lowest_price', label: 'Menor preço'},
    {value: 'best_sallers', label: 'Mais vendidos'},
  ]

  const [selectValue, setSelectValue] = React.useState('rate')
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  
  async function getContentOnbackendByFilter() {
    // faz a requisição
    console.log(' Faz a pesquisa pelo filtro ' + selectValue + 'e pelo parametro ' + searchParam)
  }

  React.useEffect(() => {
    getContentOnbackendByFilter()
  }, [selectValue, searchParam])
  
  return <SearchContainer modalIsOpen={modalIsOpen}>
    <SearchInput value={search} setValue={setSearch} redirectTo={'/search'}/>
      <header>
        <section>
          <h1>{searchParam  && searchParam !== '' ? searchParam : 'Digite sua pesquisa na caixa acima'}</h1>
          <span>5 resultados encontrados</span>
        </section>
        <section>
          <span>ordenar por</span>
          <Select
            options={selarctSearchFilterOptions}
            selectValue={selectValue}
            classNamePrefix="select-component"
            placeholder="Selecione um filtro"
            className="select-component-container"
            onChange={(selectedOption) => {setSelectValue(selectedOption?.value || '')}}
            />
          <Sort clickFunction={() => setModalIsOpen(true)}/>
          <div id="select-modal" >
            <main id="select-main">
              <div id="select-wrapper" >
                <h1>Ordenar por:</h1>
                <ol>
                  <li><label htmlFor="rate">
                    <input name="input" id="rate" value="rate" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Melhor avaliação</label>
                    </li>
                  <li><label htmlFor="highest_price">
                    <input name="input" id="highest_price" value="highest_price" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Maior preço</label>
                    </li>
                  <li><label htmlFor="lowest_price">
                    <input name="input" id="lowest_price" value="lowest_price" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Menos preço</label>
                    </li>
                  <li><label htmlFor="best_sallers">
                    <input name="input" id="best_sallers" value="best_sallers" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Mais vendidos</label>
                    </li>
                </ol>
              </div>
            </main>
          </div >
        </section>
      </header>

      <Box>
             <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="produto"
        category="sexo"
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
  </SearchContainer>;
}

export default Search;