import React from 'react';
// @types
import { ContentDataprops } from '../../types/Home';
import Box from '../../Components/Box';
import Card from '../../Components/Card';
import CardButton from '../../Components/CardButton';
// Components
import Header from '../../Components/Header';
import Loading from '../../Components/Loading';
import SearchInput from '../../Components/SearchInput';
// Consts
import { INDEX_BESTS } from '../../Consts/urls';
// Services
import Api from '../../Services/Api';

const Home: React.FC = () => {

  const [search, setSearch] = React.useState('')
  const [servicesData, setServicesData] = React.useState<ContentDataprops[]>([])
  const [productsData, setProductsData] = React.useState<ContentDataprops[]>([])

  async function getBestContentsOnbackend(type: string){
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
    getBestContentsOnbackend('service')
    getBestContentsOnbackend('product')
  }, [])
  return <>
    <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>
    <Header />
    <Box title="Serviços mais contratados">
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
      {/* {servicesData ? servicesData.map(service => {
      return <Card 
        title={service.title}
        description={service.desc}
        image={service.url}
        value={service.price}
        rate={service.rate}
        type="sexo"
        category="orgia"
        id={service.id}
        />}) 
          : 
        <Loading />}     */}
      <CardButton label="Ver todos os produtos" to="/explorar/Produtos"/>
    </Box>

    <Box title="Produtos mais comprados">
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
      {/* {productsData ? productsData.map(product => {
        
      return <Card 
        title={product.title}
        description={product.desc}
        image={product.url}
        value={product.price}
        rate={product.rate}
        type="sexo"
        category="orgia"
        id={product.id}
        />}) 
          :
        <p>Não foi possivel buscar as informações</p>}     */}
      <CardButton label="Ver todos os serviços" to="/explorar/Serviços"/>
    </Box>
    
 </>
}

export default Home;