import React from 'react';

// Components
import Header from '../../Components/Header'
import Box from '../../Components/Box'
import Card from '../../Components/Card'
import CardButton from '../../Components/CardButton';
import SearchInput from '../../Components/SearchInput';


const Home: React.FC = () => {
  
  const [search, setSearch] = React.useState('')

  const prices = [
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
  ]

  return <>
    <SearchInput onlyMobile={true} value={search} setValue={setSearch} redirectTo={'/search'}/>
    <Header />
    <Box title="Produtos mais comprados">
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
        prices={prices}/>
      <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={prices} />
      <CardButton label="Ver todos os produtos"/>
    </Box>
    
    <Box title="Produtos mais comprados" >
      <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4}
        type="sexo"
        category="orgia"
        id={1}
        prices={prices}
        />
        
      <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4} />
         <Card
        title="ASMR"
        description="ASMR é uma sigla que define gatilhos sensoriais que relaxam profundamente, causando arrepios, sono e sensação de formigamento. Se você deseja uma... experiência sedante e repleta de prazer, este é o serviço ideal!"
        image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        value="R$ 5/min"
        rate={4} />
      <CardButton label="Ver todos os produtos"/>
    </Box>
    
 </>
}

export default Home;