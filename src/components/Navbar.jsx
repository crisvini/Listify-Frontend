import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logos/Horizontal.png'

const Navbar = () => {
    const navigate = useNavigate()

    const handleSair = () => {
        navigate('/')
    }

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom container-xxl mb-3 mb-lg-5">
                <div className="container-fluid">
                    <Link className='navbar-brand' to='/home'><img src={Logo} alt="Listify" className="logo-navbar" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-primary-custom" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="text-primary-custom" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <ul className="navbar-nav justify-content-start flex-grow-1 pe-lg-3 pe-0">
                                    <li className="nav-item me-3">
                                        <NavLink to='/home'>Home</NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink to='/anotacoes'>Anotações</NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink to='/listas'>Listas</NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink to='/compartilhamento'>Compartilhamento</NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink to='/configuracoes'><i className="bi bi-gear"></i></NavLink>
                                    </li>
                                    <li className="nav-item d-lg-none mt-2">
                                        <button type='button' className='btn btn-outline-orange w-100' onClick={() => handleSair()}>Sair</button>
                                    </li>
                                </ul>
                                <ul className="navbar-nav justify-content-end flex-grow-1 d-none d-lg-flex">
                                    <li className="nav-item">
                                        <button type='button' className='btn btn-outline-orange' onClick={() => handleSair()}>Sair</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar