import { Link } from 'react-router-dom';
import Burgas from '../Burgas/Burgas';
import './NavBar.css';

function NavBar() {

    function openNav() {
        const burgas = document.querySelectorAll('.burgas');
        const fondoNav = document.querySelector('.fondoNav');
        const navBar = document.querySelector('.header__nav-ul');
        const ocultarNav = document.querySelector('.ocultarNav');
        const body = document.querySelector('body');

        body.classList.toggle('no-scroll');
        burgas[0].classList.toggle('burga0');
        burgas[1].classList.toggle('burga1');
        burgas[2].classList.toggle('burga2');
        navBar.classList.toggle("flex");
        ocultarNav.classList.toggle("flex");
        // fondoNav.classList.toggle('displayNav');
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-ul">
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/servicios'>Servicios</Link></li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <div className='ocultarNav' onClick={openNav}></div>
                <Burgas openNav={openNav}/>
                <Link to='/' className='header__title-cont'><h1>ValMurias</h1><span>Holística</span></Link>
            </nav>
        </header>
    )
}

export default NavBar;