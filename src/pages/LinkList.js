import {Link} from 'react-router-dom'

export default function LinkList(){
    return(
        <>
            <ul>
                <li>
                    <Link to={"/"}>className={"home"}Home</Link>
                </li>
                <li>
                    <Link to={"/empresa"}>Empresa</Link>
                </li>
                <li>
                    <Link to={"/contato"}>Contato</Link>
                </li>
            </ul>
        </>
    )
}

