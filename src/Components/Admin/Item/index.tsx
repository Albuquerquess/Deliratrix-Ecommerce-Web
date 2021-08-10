import React from 'react';
// @types
import { ItemProps } from '../../../@types/Admin';
// assets
import deleteSVG from '../../../Assets/Pages/Admin/delete.svg';
// consts
import { DELETE } from '../../../Consts/urls';
// Api
import Api from '../../../Services/Api';
// styles
import { ItemContainer } from './styles';
async function handleDeleteContent(id: string) {
    const isDelete = window.confirm('Você deseja deletar o conteúdo?')

    if (isDelete) {
        Api.delete(DELETE, {params: {id}}).then((response) => {
            if (response.status === 204) {
                return true
            }
        }).catch(err => {
            if(err.response.status === 404){
                alert('O conteúdo não existe!')
            return false
        }else if(err.response.status === 409) {
            alert('O conteúdo não foi deletado por um erro de conflito')
        }
        
        else if (err.response.status === 500) {
            alert('Ocorreu um erro interno, entre em contato com o suporte')
            return false
        }else {
            alert('Erro não informado, entre em contato com o suporte!')
        }
        })
    }
    
   
}

const Item: React.FC<ItemProps> = ({title, id, onDelete}) => {
  return <ItemContainer>
      <div className="item-wrapper">
          <span>{title}</span>
          <span>
              <img src={deleteSVG} alt="[EXCLUIR]" onClick={() => {
                  handleDeleteContent(id)
                  onDelete()
                  }}/>
          </span>
      </div>
  </ItemContainer>;
}

export default Item;