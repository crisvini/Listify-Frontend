import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main className="container-xxl">
                <div className="row">
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/anotacoes'><h1>Anotações</h1></Link>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/1'><h5>Anotação 1 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi eum soluta magnam beatae consectetur in ut itaque repellendus explicabo necessitatibus, adipisci ratione suscipit. Nihil id eius facere nostrum sequi?
                                    Vel aliquam soluta mollitia, cupiditate magni veniam qui. Recusandae esse soluta tenetur dolore eos tempore ab vero itaque, excepturi odio quam mollitia, eveniet eum voluptatibus modi sunt fugit magni aliquid?</span>
                            </div>
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/2'><h5>Anotação 2 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi eum soluta magnam beatae consectetur in ut itaque repellendus explicabo necessitatibus, adipisci ratione suscipit. Nihil id eius facere nostrum sequi?
                                    Vel aliquam soluta mollitia, cupiditate magni veniam qui. Recusandae esse soluta tenetur dolore eos tempore ab vero itaque, excepturi odio quam mollitia, eveniet eum voluptatibus modi sunt fugit magni aliquid?</span>
                            </div>
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/3'><h5>Anotação 3 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi eum soluta magnam beatae consectetur in ut itaque repellendus explicabo necessitatibus, adipisci ratione suscipit. Nihil id eius facere nostrum sequi?
                                    Vel aliquam soluta mollitia, cupiditate magni veniam qui. Recusandae esse soluta tenetur dolore eos tempore ab vero itaque, excepturi odio quam mollitia, eveniet eum voluptatibus modi sunt fugit magni aliquid?</span>
                            </div>
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/4'><h5>Anotação 4 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi eum soluta magnam beatae consectetur in ut itaque repellendus explicabo necessitatibus, adipisci ratione suscipit. Nihil id eius facere nostrum sequi?
                                    Vel aliquam soluta mollitia, cupiditate magni veniam qui. Recusandae esse soluta tenetur dolore eos tempore ab vero itaque, excepturi odio quam mollitia, eveniet eum voluptatibus modi sunt fugit magni aliquid?</span>
                            </div>
                            {/* <span className="fw-lighter">Nenhuma anotação encontrada</span> */}
                        </div>
                    </div>
                    <div className="container d-lg-none">
                        <hr className="my-4 text-primary-custom" />
                    </div>
                    <div className="col-12 col-lg-6 border-lg-start mt-lg-0">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/listas'><h1>Listas</h1></Link>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/4'><h5>Lista 1 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <ul className="without-dots">
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                                </div>
                                <Link to='/anotacao/4'><h5>Lista 2 <i className="bi bi-arrow-return-right"></i></h5></Link>
                                <ul className="without-dots">
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos consequuntur minus voluptates. Impedit quas perspiciatis unde cupiditate alias eius cum eum expedita illo, vero error est fugit obcaecati sed!</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <span className="fw-lighter">Nenhuma lista encontrada</span> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage