import { useState } from 'react'
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';



function App() {

  console.log("Hello World");

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<Signin/>}/>

        <Route path='/signup' element={<Signup/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/profile' element={<Profile/>}/>

      </Routes>
       
    </BrowserRouter>
  )
}

export default App
