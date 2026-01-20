import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Livros from './components/book/Livros'
import FilmesSeries from './components/movie/FilmesSeries'
import SiteDesc from './components/pages/SiteDesc'
import Header from './components/layout/Header'

import './App.css'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes> 
          <Route path='/' element = {<Home/>}/>
          <Route path='filmesseries' element = {<FilmesSeries/>}/>
          <Route path='livros' element = {<Livros/>}/>
          <Route path='desc' element = {<SiteDesc/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
