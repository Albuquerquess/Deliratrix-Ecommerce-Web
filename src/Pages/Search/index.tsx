import React from 'react';
import { useParams } from 'react-router-dom'
import { useDebounce } from 'use-lodash-debounce'
 
// styles
import { SearchContainer } from './styles';

// @types
import { searchParamsProps, searchDataProps } from '../../@types/searchPage';

// components
import SearchInput from '../../Components/SearchInput'
import Box from '../../Components/Box'
import Card from '../../Components/Card'
import Select from 'react-select';
import Loading from '../../Components/Loading';

// Assets
import Sort from '../../Assets/Components/SearchPage/Sort'

// consts
import { INDEX_SEARCH } from '../../Consts/urls'

// api
import Api from '../../Services/Api';

const Search: React.FC = () => {
  const params: searchParamsProps = useParams();
  const searchParam: string = params.search
  
  const selarctSearchFilterOptions = [
    {value: 'rate', label: 'Melhor avaliação'},
    {value: 'bprice', label: 'Maior preço'},
    {value: 'lprice', label: 'Menor preço'}
  ]

  const [selectValue, setSelectValue] = React.useState('rate')
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const searchDebounce = useDebounce(search, 1000)
  const [searchData, setSearchData] = React.useState<searchDataProps[]>([])

  
  async function getContentOnbackendByFilter() {
    const response = await Api.get(INDEX_SEARCH, {params: {search: searchDebounce, orderBy: selectValue}})
    setSearchData(response.data)

  }

  React.useEffect(() => {
    setSearch(searchParam)
    getContentOnbackendByFilter()
  }, [])
  React.useEffect(() => {
    getContentOnbackendByFilter()
  }, [searchDebounce, selectValue])
  
  return <SearchContainer modalIsOpen={modalIsOpen}>
    <SearchInput value={search} setValue={setSearch} redirectTo={'/search'}/>
      <header>
        <section>
          <h1>{searchDebounce  && searchDebounce !== '' ? searchDebounce : 'Digite sua pesquisa na caixa acima'}</h1>
          <span>{searchData.length} resultados encontrados</span>
        </section>
        <section>
          <span>ordenar por</span>
          <Select
            options={selarctSearchFilterOptions}
            selectValue={selectValue}
            classNamePrefix="select-component"
            placeholder="Selecione um filtro"
            className="select-component-container"
            onChange={(selectedOption) => setSelectValue(selectedOption?.value || '')}
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
                  <li><label htmlFor="bprice">
                    <input name="input" id="bprice" value="bprice" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Maior preço</label>
                    </li>
                  <li><label htmlFor="lprice">
                    <input name="input" id="lprice" value="lprice" type="radio" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectValue(e.target.value)}}
                    onClick={() => setModalIsOpen(false)} 
                    />Menor preço</label>
                    </li>
                </ol>
              </div>
            </main>
          </div >
        </section>
      </header>

      <Box>
        {searchData ? searchData.map(content => <Card
          title={content.title}
          description={content.desc}
          image={content.url}
          value={content.price}
          rate={content.rate}
          type={content.type}
          category={content.category}
          id={1} />) : <Loading />}
      </Box>
  </SearchContainer>;
}

export default Search;