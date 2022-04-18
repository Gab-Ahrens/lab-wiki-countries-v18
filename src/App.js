import { Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <Route>
            <Route path="/" element={<CountriesList />}></Route>
            <Route path="/:id" element={<CountriesDetails />}></Route>
          </Route>
        </div>
     </div>
    </div>
  );
}

export default App;
