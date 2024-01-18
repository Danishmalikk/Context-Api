import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import ContextProvider from './Context';
import UseRefDemo from './Components/UseRefDemo';
import MyForm from './Components/Form';
import Data from './Components/Data';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/useRef' element={<UseRefDemo/>}> UseRef </Route>
        <Route path='/form' element={<MyForm/>}> UseRef </Route>
        <Route path='/data' element={<Data/>}> Data </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
