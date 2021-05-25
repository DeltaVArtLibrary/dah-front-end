import NavBar from './Components/NavBar';
import Home from './Home';
import Art from './Art';

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

        </Switch>
      </main>
    </div>
  );
}

export default App;
