import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from './Assets/styles/Common/Container';
import Home from './Pages/Home';

const Routes: React.FC = () => {
  return <BrowserRouter>
    <BrowserRouter>
      <Switch>
        <Container>
          <Route exact path="/" component={Home}/>
        </Container>
      </Switch>
    </BrowserRouter>
  </BrowserRouter>;
}

export default Routes;