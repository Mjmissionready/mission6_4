import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import CreateList from './components/CreateList';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import UpdateInfo from './components/UpdateInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create-list' element={<CreateList />} />
          <Route path='/show-list' element={<ShowList />} />
          <Route path='/show-detail/:id' element={<ShowDetail />} />
          <Route path='/edit-list/:id' element={<UpdateInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;