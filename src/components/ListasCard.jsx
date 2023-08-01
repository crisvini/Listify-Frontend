import { Link } from "react-router-dom"

const ListasCard = ({ id }) => {
    return (
        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
            <Link to={'/listas/' + id}><h5>Lista {id} <i className="bi bi-arrow-return-right fs-7"></i></h5></Link>
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
            <div className="mt-2">
                <span className="badge bg-danger me-2">Trabalho</span>
                <span className="badge bg-primary me-2">Prioridade</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fs-7 fw-lighter me-3 text-secondary-custom align-self-end">Criado em 01/08/2023 às 11:14</span>
                <div>
                    <a className="pointer fs-5 me-2"><i className="bi bi-pencil"></i></a>
                    <a className="pointer fs-5"><i className="bi bi-trash"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ListasCard