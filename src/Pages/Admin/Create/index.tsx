import qs from 'qs';
import React from 'react';
import { useHistory } from 'react-router-dom';
// @types
import { categoriesProps, pricesProps, selectProps } from '../../../types/Admin';
import AdminNav from '../../../Components/Admin/Nav';
import Button from '../../../Components/Button';
// components
import Card from '../../../Components/Card';
import Loading from '../../../Components/Loading';
// consts
import { CREATE, INDEX_ALL_CATEGORIES } from '../../../Consts/urls';
// api
import Api from '../../../Services/Api';
// validate
import createContentValidate from '../../../Validation/createContent';
// styles
import { AdminCreateContainer } from './styles';

const Create: React.FC = () => {
  const [title, setTitle] = React.useState('')
  const [duration, setDuration] = React.useState<number>()
  const [prices, setPrices] = React.useState<pricesProps[]>([{price: 0, label: 'Padrão'}])
  const [desc, setDesc] = React.useState('')
  const [finalContentUrl, setFinalContentUrl] = React.useState('')
  const [thumb, setThumb] = React.useState<File | null>()
  const [previewThumb, setPreviewThumb] = React.useState<string>()
  const [categoryOptions, setCategoryOptions] = React.useState<selectProps[]>()
  const [typeSelect, setTypeSelect] = React.useState('product')
  const [categorySelect, setCategorySelect] = React.useState('')
  const [newCategory, setNewCategory] = React.useState('')
  const [loadVisible, setLoadVisible] = React.useState(false)

  const history = useHistory()
  
  async function handleSubmit(e: any) {
    e.preventDefault()
    
    const payload = {title, desc, prices, finalContentUrl, duration, type: typeSelect, category: newCategory ? newCategory : categorySelect}

    const validate = await createContentValidate(payload)
    if (!(validate?.valid)) return alert('Erro: '+validate?.error)    
    if (!thumb) return alert('Você deve adicionar uma THUMBNAIL')
    setLoadVisible(true)
    const formData = new FormData()
    formData.append('file', thumb)

    const create = await Api.post(CREATE, formData, {
      params: payload, paramsSerializer: params => {
      return qs.stringify(params)}
    })
    if (create.status === 200) return history.push('/admin')
    setLoadVisible(false)
    return alert('Erro ao criar o conteúdo, verifique a sua conexão e entre em contato com o suporte. Status code: '+create.status)
    

  }
  async function indexCategories(type: string) {
    const categoriesResponse = await Api(INDEX_ALL_CATEGORIES, {params: {type: type}})
    const categories: categoriesProps = categoriesResponse.data

    const categoriesRef = categories.categories.map((category, index) => {
      if (index === 0) {
        setCategorySelect(category.category)
      }
      return {value: category.category, label: category.category}
    })
    setCategoryOptions(categoriesRef)
  }

  React.useEffect(() => {indexCategories(typeSelect)}, [])
  
  React.useEffect(() => {
    const type = typeSelect
    indexCategories(type || 'product')
  }, [typeSelect])
  
  React.useEffect(() => {
    if (thumb) {
      const reader = new FileReader();
      reader.onloadend =() => {
        setPreviewThumb(reader.result as string)
      }
      reader.readAsDataURL(thumb)
    }else {
      setPreviewThumb('')
    }
  }, [thumb])

  return <AdminCreateContainer newCategory={categorySelect === 'new'}>
      <AdminNav to="/admin">Voltar para Admin</AdminNav>

      <main id="admin-create-main">
        <section>
          <h1>Adicionar conteúdo</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="type">Tipo
              <select id="type" value={typeSelect} onChange={(e) => setTypeSelect(e.target.value)}>
                <option value="product" >Produtos</option>
                <option value="service" >Serviços</option>
              </select>
            </label>
            <label htmlFor="" id="old-category">Categoria
              <select value={categorySelect} onChange={(e) => setCategorySelect(e.target.value)}>
                <optgroup label="Selecione uma categoria">
                {categoryOptions && categoryOptions.map((option) => <option value={option.value}>{option.label}</option>)}
                </optgroup>

                <optgroup label="Criar uma nova categoria">
                <option value="new">Criar nova categoria</option>
                </optgroup>
              </select>
            </label>
         
             <label htmlFor="" id="new-category">Criar categoria
              <input required type="text" placeholder="Ex: Pack de banho" value={newCategory} onChange={(e) =>  setNewCategory(e.target.value)}/>
            </label>
            <label htmlFor="">Duração
              <input placeholder="Ex: 5.35" required type="number" pattern="[0-9]+" value={duration} onChange={(e) => setDuration(Number(e.target.value))}/>
            </label>
            <label htmlFor="">Título
              <input required type="text" placeholder="Ex: Pack de banho" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label htmlFor="">Preço
              <input required type="number" pattern="[0-9]+" value={prices[0].price ? prices[0].price : 0} onChange={(e) => setPrices([{price: Number(e.target.value), label: 'Padrão'}])}/>
            </label>
            <label htmlFor="" id="description">Descrição
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </label>
            <label htmlFor="thumb" id="file">Thumbnail
              <label htmlFor="thumb">
                {thumb ? 'Arquivo adicionado!' : 'Adicione um arquivo'}
                <input required type="file" id="thumb" accept="image/*" onChange={({target}) => {
                  const file = target.files && target.files[0]
                  if (file && file.type.substr(0, 5) === 'image') {
                    setThumb(file)
                  }else {
                    setThumb(null)
                  }

                }}/>
              </label>
            </label>
            <label htmlFor="" >link do conteúdo
              <input 
              placeholder="https://drive.google.com/*"
              pattern="https://.*" 
              value={finalContentUrl}
              size={60} onChange={e => setFinalContentUrl(e.target.value)}/>
            </label>
            <div id="button" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {handleSubmit(e)}}>
            <Button label="Adicionar" type="submit" />
            <Loading display={loadVisible}/> 
            </div>
          </form>
        </section>
        <section id="preview">
          <h1>Preview</h1>
          <Card title={title} description={desc} value={prices[0].price} image={previewThumb} redirect={false} rate={5}/>
        </section>
      </main>
  </AdminCreateContainer>;
}

export default Create;