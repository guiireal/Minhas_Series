import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Genres from './pages/Genres';
import NewGenre from './pages/NewGenre';
import EditGenre from './pages/EditGenre';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home} />
          <Route path='/genres' exact component={Genres} />
          <Route path='/genres/create' exact component={NewGenre} />
          <Route path='/genres/:id' exact component={EditGenre} />
        </div>
    </BrowserRouter>
  );
}

export default App;
