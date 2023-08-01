import { Link } from "react-router-dom"
import Tag from "./Tag"

const AnotacoesCard = ({ id, nome, anotacao, compartilhada, tags }) => {
    return (
        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
            <div className="container-xxl p-0">
                <div className="row">
                    <div className="col-10">
                        <Link to={'/anotacoes/' + id}><h5>{nome} <i className="bi bi-arrow-return-right fs-7"></i></h5></Link>
                    </div>
                    <div className="col-2 text-end">
                        {compartilhada && <span className="fs-5 text-primary"><i className="bi bi-people"></i></span>}
                        <a className="pointer fs-5 ms-2"><i className="bi bi-share"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <span>{anotacao}</span>
            </div>
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
        </div >
    )
}

export default AnotacoesCard