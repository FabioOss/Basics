import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contato from './Contato'
import Empresa from './Empresa'
import Navbar from '../components/layout/Navbar'

export default function RoutesApp(){
    return(

        < BrowserRouter>
          < Navbar />
          < Routes  >

            < Route exact path={"/"} element={<Home />} />
            < Route exact path={"/empresa"} element={<Empresa />} /> 
            < Route exact path={"/contato"} element={<Contato />} />

          </  Routes  >
        </ BrowserRouter >
    )
}

