import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from './Assets/styles/Common/Container';
// Components
import Navigation from './Components/Navigation';

import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';

const Routes: React.FC = () => {
  return <BrowserRouter>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Container>
          <Route exact path="/" component={Home}/>
        </Container>
      </Switch>
      <Footer />
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;