import { Link } from "react-router-dom"
import Tag from "./Tag"
import Tarefa from "./Tarefa"

const ListasCard = ({ id, nome, descricao, tarefas, tags }) => {
    return (
        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
            <Link to={'/listas/' + id}><h5>{nome} <i className="bi bi-arrow-return-right fs-7"></i></h5></Link>
            <span className="fw-light">{descricao}</span>
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