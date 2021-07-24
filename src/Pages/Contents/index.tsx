import React from 'react';
import { useParams, withRouter } from 'react-router-dom'

// @types
import { contentDataProps, paramsProps } from '../../@types/Content'

// components
import SearchInput from '../../Components/SearchInput';
import Box from '../../Components/Box'
import Card from '../../Components/Card'
import Loading from '../../Components/Loading'

// api
import Api from '../../Services/Api'

// references
import { typeReferenceOnBackend } from '../../Utils/references'

import { INDEX } from '../../Consts/urls';

const Contents: React.FC = () => {
  const params: paramsProps = useParams()
  const type: string = params.type
  

  const [search, setSearch] = React.useState('')
  const [contentData, setContentData] = React.useState<contentDataProps[]>([])
  
  async function getContentOnbackendbyType() {
    if (type in typeReferenceOnBackend) {

      const response = await Api.get(INDEX, {params: {type: typeReferenceOnBackend[type]}})
      setContentData(response.data)
      
    }
  }


  React.useEffect(() => {
    setContentData([])
    getContentOnbackendbyType()
  }, [params])

  return <>
      <SearchInput value={search} setValue={setSearch} onlyMobile/>
      <Box title={type}>
        {contentData ? contentData.map(content => <Card
          title={content.title}
          description={content.desc}
          image={content.url}
          value={content.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          rate={content.rate}
          id={content.id}
          type={content.type}
          category={content.category}
          />) : <Loading />}
      </Box>
  </>;
}

export default withRouter(Contents);