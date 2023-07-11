import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Main/>
        </BrowserRouter>
    </div>
  );
}

export default App;
