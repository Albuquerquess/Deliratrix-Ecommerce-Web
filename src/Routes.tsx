import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from './Assets/styles/Common/Container';
// Components
import Navigation from './Components/Navigation';

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
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;