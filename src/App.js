import './App.css';
import FileUploader from './components/FileUploader';
import { Route, Switch } from 'react-router-dom';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <div className="App">
    <main>
      <Switch>
        <Route path='/' exact>
          <Dropdown />
        </Route>
        <Route path='/upload'>
          <FileUploader />
        </Route>
      </Switch>
    </main>
    </div>
  );
}

export default App;
