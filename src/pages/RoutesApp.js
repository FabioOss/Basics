import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contato from './Contato'
import Empresa from './Empresa'
import LinkList from './LinkList'

export default function RoutesApp(){
    return(

        < BrowserRouter>
          < LinkList />
          < Routes  >

            < Route exact path={"/"} element={<Home />} />
            < Route exact path={"/empresa"} element={<Empresa />} /> 
            < Route exact path={"/contato"} element={<Contato />} />

          </  Routes  >
        </ BrowserRouter >
    )
}

