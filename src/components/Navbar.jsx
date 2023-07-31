import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logos/Horizontal.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom" aria-label="Offcanvas navbar large">
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
                                <li className="nav-item dropdown me-3">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Anotações
                                    </a>
                                    <ul className="dropdown-menu bg-primary-custom">
                                        <li><a className="dropdown-item text-primary-custom" href="#">Minhas anotações</a></li>
                                        <li><a className="dropdown-item text-primary-custom" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink to='/configuracoes'><i className="bi bi-gear"></i></NavLink>
                                </li>
                                <li className="nav-item d-lg-none mt-2">
                                    <button type='button' className='btn btn-outline-orange w-100'>Sair</button>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 d-none d-lg-flex">
                                <li className="nav-item">
                                    <button type='button' className='btn btn-outline-orange'>Sair</button>
                                </li>
                            </ul>
                        </div>
                        {/* <form className="d-flex mt-3 mt-lg-0" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar