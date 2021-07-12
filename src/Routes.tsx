import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from './Assets/styles/Common/Container';
// Components
import Navigation from './Components/Navigation';

import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import Content from './Pages/Contents';
import Sobre from './Pages/About';
import Search from './Pages/Search';
import View from './Pages/View';
import Cart from './Pages/Cart';
import Identify from './Pages/Identify';
import Payment from './Pages/Payment';
import Confirmation from './Pages/Confirmation';

const Routes: React.FC = () => {
  return <BrowserRouter>
    <BrowserRouter>
      <Switch>
        <Container>
          <Navigation />
          <Route exact path="/" component={Home}/>
          <Route exact path="/explorar/:type" component={Content}/>
          <Route exact path="/search/:search" component={Search}/>
          <Route exact path="/visualizar/:id" component={View}/>
          <Route exact path="/cart/:id" component={Cart}/>
          <Route exact path="/identificacao" component={Identify}/>
          <Route exact path="/pagamento" component={Payment}/>
          <Route exact path="/pagamento/confirmacao/:txid" component={Confirmation}/>
          <Route exact path="/sobre" component={Sobre}/>
        </Container>
      </Switch>
      <Footer />
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;