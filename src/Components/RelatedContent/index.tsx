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
    {relatedContent.map(content => <Card
      type={content.type}
      category={content.category}
      image={content.url}
      title={content.title}
      description={content.desc}
      rate={content.rate}
      id={content.id}
      value={content.price}
      
      />)}
      </Box>
}

export default RelatedContent;