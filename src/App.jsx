import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NotFound from './pages/notFound';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
