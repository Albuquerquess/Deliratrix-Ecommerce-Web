import React, { useDebugValue } from 'react';
import { useHistory } from 'react-router-dom'
// Api
import Api from '../../../Services/Api'
// Styles
import { LoginContainer } from './styles';
// Context
import { AdminContext } from '../../../Context/Admin'

const Login: React.FC = () => {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const location = useHistory()
  const { registerToken } = React.useContext(AdminContext)

    function fakelogin({user, password}: any) {
      if (user === 'admin' && password === '123456') {
        return {token: '1234', isAuth: true}
      }else {
        return {isAuth: false, token: null, messages: [
          'Usuário incorreto'
        ]}
      }
    }


  async function validateCredentials(e: React.FormEvent<HTMLFormElement>) {
    console.log('entrou')
    e.preventDefault()
    // const isValidLogin: isValidLogin = await Api.post('admin/validation', {login, password})
    const response =  fakelogin({user, password})

    if (response.isAuth ) {
      registerToken(String(response.token))
      return location.push('/admin')
    }else {
      setPassword('')
    }
    

  }

  return <LoginContainer>
      <main>
          <h1>Insira as credenciais</h1>
          <form onSubmit={validateCredentials}>
              <label> 
                    <i className="info">As informações estão incorretas, tente novamente!. Se o erro persistir, entre em contato com o suporte</i>
                    <strong>Login</strong>
                    <input type="text" name="login" id="login" value={user} onChange={(e) => {setUser(e.target.value)}} />
              </label>
            <label> 
                <strong>Senha</strong>  
                <input type="password" name="passwd" id="passwd" value={password} onChange={(e) => {setPassword(e.target.value)}} />

            </label>
            <button type="submit">Fazer login</button>
          </form>
      </main>
  </LoginContainer>;
}

export default Login;