import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from './Assets/styles/Common/Container';
// Components
import Navigation from './Components/Navigation';

import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import Content from './Pages/Contents';

const Routes: React.FC = () => {
  return <BrowserRouter>
    <BrowserRouter>
      <Switch>
        <Container>
          <Navigation />
          <Route exact path="/" component={Home}/>
          <Route exact path="/explorar/:type" component={Content}/>
        </Container>
      </Switch>
      <Footer />
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;