import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Vacancy from '../../pages/Vacancy';
import Header from '../Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="vacancies" element={<Main />} />
            <Route path="/vacancies/:id" element={<Vacancy />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
