import NavBar from './Components/NavBar';
import Home from './Home';
import Art from './Art';
import Collections from './Collections';
import Profile from './Profile';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Art">
            <Art />
          </Route>
          <Route path="/Collections">
            <Collections />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route>
            <Register />
          </Route>
          <Route path="Login">
            <Login />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
