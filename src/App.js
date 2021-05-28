import NavBar from './Components/NavBar';
import Art from './Art';
import Collections from './Collections';
import Profile from './Profile';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import CreateArt from './Components/CreateArt';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Art" />
          </Route>
          <Route path="/Art">
            <Art />
          </Route>
          <Route path="/Collections">
            <Collections />
          </Route>
          <Route path="/Profile/:id">
            <Profile />
          </Route>
          <Route path="/CreateArt" >
            <CreateArt />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route>
            <h1>404: Page not found.</h1>
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
