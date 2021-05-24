import NavBar from './Components/NavBar';

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
          <Route path="/">Home</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
