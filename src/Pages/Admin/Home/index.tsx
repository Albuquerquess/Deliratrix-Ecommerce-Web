import React from 'react';
import { Link } from 'react-router-dom';
// @types
import { ItemProps } from '../../../types/Admin';
import Item from '../../../Components/Admin/Item';
// components
import AdminNav from '../../../Components/Admin/Nav';
// consts
import { INDEX_ALL_TITLES } from '../../../Consts/urls';
// Api
import Api from '../../../Services/Api';
import { AdminContainer } from './styles';
// Assets
import Add from '../../../Assets/Pages/Admin/add.svg'
const Admin: React.FC = () => {
  const [items, setItems] = React.useState<ItemProps[]>([])
  const [itemsQtd, setItemsQtd] = React.useState(0)
  
  async function getItemsOnbackend() {
    const response = await Api.get(INDEX_ALL_TITLES)
    if (response.status !== 200) return alert('Erro ao buscar os conteúdos. Verifique a sua conexão e tente novamente e, se persistir, entre em contato com o suporte')
    const items = response.data
    setItemsQtd(items.length)
    return setItems(response.data)

  }
  React.useEffect(() => {
    getItemsOnbackend()
    }, [itemsQtd])

  return <AdminContainer>
        <AdminNav to="/">Voltar para Home</AdminNav>
        <header>
          <h1>Produtos cadastrados</h1>
          <Link to="/admin/cadastrar">Cadastrar conteúdo <img src={Add} alt="[ + ]" /></Link>
        </header>
        <div id="items-contianer">
          {/* {items ? items.map(item => <Item title={item.title} id={item.id} onDelete={() => setItemsQtd(itemsQtd - 1 > 0 ? itemsQtd - 1 : 0)}/>): ''} */}
          <Item title={'Titulo do conteúdo'} id={'123'} onDelete={() => setItemsQtd(itemsQtd - 1 > 0 ? itemsQtd - 1 : 0)}/>
          <Item title={'Titulo do conteúdo'} id={'456'} onDelete={() => setItemsQtd(itemsQtd - 1 > 0 ? itemsQtd - 1 : 0)}/>
          <Item title={'Titulo do conteúdo'} id={'789'} onDelete={() => setItemsQtd(itemsQtd - 1 > 0 ? itemsQtd - 1 : 0)}/>


        </div>
  </AdminContainer>;
}

export default Admin;