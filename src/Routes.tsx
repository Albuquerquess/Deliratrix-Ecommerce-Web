import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './Assets/styles/Common/Container';
import Footer from './Components/Footer';
// Components
import Navigation from './Components/Navigation';
// Loading
import Loading from './Components/PageLoading';
// context
import { CartProvider } from './Context/Cart';
import { DebtorProvider } from './Context/Debtor';
import Sobre from './Pages/About';
import Cadastrar from './Pages/Admin/Create';
import Admin from './Pages/Admin/Home';
import Cart from './Pages/Cart';
import Confirmation from './Pages/Confirmation';
import Content from './Pages/Contents';
// Pages
import Home from './Pages/Home';
import Identify from './Pages/Identify';
import Payment from './Pages/Payment';
import Search from './Pages/Search';
import View from './Pages/View';
//utils
import ScrollToTop from './Utils/scrollToTop'

const Routes: React.FC = () => {
  return <BrowserRouter>
    <BrowserRouter>
    <DebtorProvider>
      <CartProvider>
        <Loading disabled={false}/>
        <ScrollToTop />
        <Switch>
          <Container>
            <Navigation />
            <Route exact path="/" component={Home}/>
            <Route exact path="/explorar/:type" component={Content}/>
            <Route exact path="/search/:search" component={Search}/>
            <Route exact path="/visualizar/:id" component={View}/>
            <Route exact path="/carrinho/:id" component={Cart}/>
            <Route exact path="/identificacao" component={Identify}/>
            <Route exact path="/pagamento" component={Payment}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/admin/cadastrar" component={Cadastrar}/>
            <Route exact path="/pagamento/confirmacao" component={Confirmation}/>
            <Route exact path="/sobre" component={Sobre}/>
          </Container>
        </Switch>
        <Footer />
      </CartProvider>
      </DebtorProvider>
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;