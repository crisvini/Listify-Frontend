import { Link } from "react-router-dom"
import Tag from "./Tag"
import Tarefa from "./Tarefa"

const ListasCardCompartilhado = ({ id, nome, descricao, dataEntrega, compartilhada, tarefas, tags }) => {
    return (
        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
            <div className="container-xxl p-0">
                <div className="row">
                    <div className="col-10">
                        <h5><Link to={'/listas/' + id}>{nome} <i className="bi bi-arrow-return-right fs-7"></i></Link></h5>
                    </div>
                </div>
            </div>
            <div className="my-1">
                <span className="fw-lighter me-3 text-orange align-self-end">Entrega para {dataEntrega}</span>
            </div>
            <div>
                <span className="fw-light">{descricao}</span>
            </div>
            <ul className="without-dots mt-3">
                {tarefas.map((value, key) => (
                    <Tarefa key={key} id={value.id} completa={value.completa} texto={value.texto} />
                ))}
            </ul>
            <div className="mt-2">
                {tags.map((value, key) => (
                    <Tag key={key} corTexto={value.corTexto} corBg={value.corBg} nome={value.nome} />
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fs-7 fw-lighter me-3 text-secondary-custom align-self-end">Criado em 01/08/2023 às 11:14 por Cristian</span>
                <div>
                    <a className="pointer fs-5"><i className="bi bi-pencil"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ListasCardCompartilhado