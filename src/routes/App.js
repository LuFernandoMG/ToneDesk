import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/containers/App.scss';

// Rutas
import Home from '../containers/Home';
import Collection from '../containers/Collection';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Wishlist from '../containers/Wishlist';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/wishlist' component={Wishlist} />
        <Route exact path='/collection' component={Collection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
