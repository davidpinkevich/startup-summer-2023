import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Favorites from '../../pages/Favorites/Favorites';
import Vacancy from '../../pages/Vacancy/Vacancy';
import Header from '../Header/Header';
import NotFound from '../../pages/NotFound/NotFound';
import './App.scss';

function App() {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="/vacancies/:id" element={<Vacancy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
