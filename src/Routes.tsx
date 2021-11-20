import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const Routes = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
    <Route path="/" exact>
        <Home />
      </Route> 
      <Route path="/mainpage" exact>
        <MainPage />
      </Route>       
    </Switch>
  </BrowserRouter>
);

export default Routes;
