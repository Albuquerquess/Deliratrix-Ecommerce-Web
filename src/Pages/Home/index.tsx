import React from 'react';

// Components
import Header from '../../Components/Header'
import Box from '../../Components/Box'
import Card from '../../Components/Card'
import CardButton from '../../Components/CardButton';
import SearchInput from '../../Components/SearchInput';

// Services
import Api from '../../Services/Api'

// Consts
import { INDEX_BESTS } from '../../Consts/urls'

// @types
import { ContentDataprops } from '../../@types/Home'

const Home: React.FC = () => {

  const [search, setSearch] = React.useState('')
  const [servicesData, setServicesData] = React.useState<ContentDataprops[]>([])
  const [productsData, setProductsData] = React.useState<ContentDataprops[]>([])

  async function getContentOnbackend(type: string){
    const response = await Api.get(INDEX_BESTS, {params: {type}})
    
    switch (type) {
      case 'service':
        setServicesData(response.data)
        break
      case 'product':
        setProductsData(response.data)
        break
    }
  }

  React.useEffect(() => {
    getContentOnbackend('service')
    getContentOnbackend('product')
  }, [])

  return <>
    <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>
    <Header />
    <Box title="Serviços mais contratados">
      {servicesData ? servicesData.map(service => {
        console.log(service)
        const priceRef = service.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      return <Card 
        title={service.title}
        description={service.desc}
        image={service.url}
        value={priceRef}
        rate={4}
        type="sexo"
        category="orgia"
        id={service.id}
        />}) 
          : 
        <p>Não foi possivel buscar as informações</p>}    
      <CardButton label="Ver todos os produtos" to="/explorar/Produtos"/>
    </Box>

    <Box title="Produtos mais comprados">
      {productsData ? productsData.map(product => {
        const priceRef = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        
      return <Card 
        title={product.title}
        description={product.desc}
        image={product.url}
        value={priceRef}
        rate={4}
        type="sexo"
        category="orgia"
        id={product.id}
        />}) 
          :
        <p>Não foi possivel buscar as informações</p>}    
      <CardButton label="Ver todos os produtos" to="/explorar/Produtos"/>
    </Box>
    
 </>
}

export default Home;