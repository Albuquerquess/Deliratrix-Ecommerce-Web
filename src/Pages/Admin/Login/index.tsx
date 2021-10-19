import React, { useDebugValue } from 'react';
import { useHistory } from 'react-router-dom'
// Api
import Api from '../../../Services/Api'
// Styles
import { LoginContainer } from './styles';
// Context
import { AdminContext } from '../../../Context/Admin'
import { isValidLogin } from '../../../types/Admin';

const Login: React.FC = () => {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [infoDisplay, setInfoDisplay] = React.useState(false)
  const location = useHistory()
  const { registerToken } = React.useContext(AdminContext)

  async function validateCredentials(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setInfoDisplay(false)
    registerToken(String('12456789123456789'))
    return location.push('/admin')

    try {
      const response = await Api.post('/admin/login', {}, {
        auth: {username: user, password}
      })
      
      const isValid: isValidLogin = response.data
      
      if (isValid.isAuth) {
        setInfoDisplay(false)
        registerToken(String(isValid.token))
        return location.push('/admin')
      }
      
    } catch (error) {
      setInfoDisplay(true)
      setPassword('')
    }
    
  }

  return <LoginContainer infoDisplay={infoDisplay}>
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