import './NavBar.css';
import CartWidget from '../CartWidget/Cartwidget';
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>
                Pesca Bariloche
            </h1>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Señuelos</li>
                    <li>Excursiones</li>
                    <li>contacto</li>
                    <li><CartWidget/></li>
                </ul>
            </div>
             
             
        </nav>
    )
}

export default NavBar