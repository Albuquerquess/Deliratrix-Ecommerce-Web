import React from 'react';
import { useParams } from 'react-router-dom'
// import { Container } from './styles';

// @types
import { paramsProps } from '../../@types/Content'

// components
import Search from '../../Components/Search';
import Box from '../../Components/Box'
import Card from '../../Components/Card'

const explorerLabels = {
  produtos: 'Produtos',
  servicos: 'Serviços'
}

const Contents: React.FC = () => {
  const params: paramsProps = useParams()
  const type: string = params.type
  

  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    console.log(params)
  }, [params])
  return <>
      <Search value={search} setValue={setSearch} />
      <Box title={'Produtos'}>
        <Card
          title={'Titulo'}
          description={'Cillum quis cillum consequat sit nulla quis pariatur magna do aliquip pariatur cillum. Sunt aliqua exercitation magna aliqua aute. Irure et labore velit ex do. Qui enim reprehenderit aute cillum labore tempor dolore sit est ad reprehenderit et duis ex. Occaecat nulla dolor aliqua aliqua anim enim. Do magna ut enim ad elit. Mollit id laboris consequat cillum nostrud irure.'}
          image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          value={'R$ 5/min'}
          rate={3}
          />
        <Card
          title={'Titulo'}
          description={'Cillum quis cillum consequat sit nulla quis pariatur magna do aliquip pariatur cillum. Sunt aliqua exercitation magna aliqua aute. Irure et labore velit ex do. Qui enim reprehenderit aute cillum labore tempor dolore sit est ad reprehenderit et duis ex. Occaecat nulla dolor aliqua aliqua anim enim. Do magna ut enim ad elit. Mollit id laboris consequat cillum nostrud irure.'}
          image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          value={'R$ 5/min'}
          rate={3}
          />
        <Card
          title={'Titulo'}
          description={'Cillum quis cillum consequat sit nulla quis pariatur magna do aliquip pariatur cillum. Sunt aliqua exercitation magna aliqua aute. Irure et labore velit ex do. Qui enim reprehenderit aute cillum labore tempor dolore sit est ad reprehenderit et duis ex. Occaecat nulla dolor aliqua aliqua anim enim. Do magna ut enim ad elit. Mollit id laboris consequat cillum nostrud irure.'}
          image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          value={'R$ 5/min'}
          rate={3}
          />
        <Card
          title={'Titulo'}
          description={'Cillum quis cillum consequat sit nulla quis pariatur magna do aliquip pariatur cillum. Sunt aliqua exercitation magna aliqua aute. Irure et labore velit ex do. Qui enim reprehenderit aute cillum labore tempor dolore sit est ad reprehenderit et duis ex. Occaecat nulla dolor aliqua aliqua anim enim. Do magna ut enim ad elit. Mollit id laboris consequat cillum nostrud irure.'}
          image="https://images.unsplash.com/photo-1625093440233-1dac60534a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          value={'R$ 5/min'}
          rate={3}
          />
      </Box>
  </>;
}

export default Contents;