import { Route, Routes } from 'react-router-dom';
import './index.css';
import MainLayout from './layouts/MainLayout';
import BookDetail from './pages/BookDetail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/books/:id' element={<BookDetail />} />
      </Route>
    </Routes>
  );
}
export default App;
