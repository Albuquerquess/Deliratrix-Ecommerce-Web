import React from 'react';
// Api
import Api from '../../Services/Api'
// Consts
import { INDEX } from '../../Consts/urls'
// types
import { contentProps } from '../../types/LogicCart';
import { relatedContentProps } from '../../types/relatedContent';
// Component
import Card from '../Card';
import Box from '../Box';



const RelatedContent: React.FC<relatedContentProps> = ({type, title}) => {
  const [relatedContent, setRelatedContent] = React.useState<contentProps[]>([])

  async function getContentOnBackend() {

    const response = await Api.get(INDEX, {params: {type}})
    setRelatedContent(response.data)
  }

  React.useEffect(() => {
    getContentOnBackend()
  }, [])

  return <Box title={title ? title : "Produtos relacionados"}>
    {/* {relatedContent.map(content => <Card
      type={content.type}
      category={content.category}
      image={content.url}
      title={content.title}
      description={content.desc}
      rate={content.rate}
      id={content.id}
      value={content.price}
      
      />)} */}
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
}

export default RelatedContent;